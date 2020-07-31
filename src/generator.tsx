// Webpack injected variables
declare const URL: string;
declare const OUTPUT_DIR: string;
declare const CSS_BASE: string;
declare const R_CSS_BASE: string;
declare const PRINT_MODE: boolean;

import React from "react";
import ReactDOMServer from "react-dom/server";

const agents = [
  "breach",
  "brimstone",
  "cypher",
  "jett",
  "omen",
  "phoenix",
  "raze",
  "reyna",
  "sage",
  "sova",
  "viper",
];

import {
  readFile,
  writeFile,
  readFileSync,
  writeFileSync,
  copyFile,
  copyFileSync,
  mkdir,
  mkdirSync,
} from "fs";

import { sync as rmdir } from "rimraf";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { throwIfErr, dirStat, templateReplace } from "./utils";
import { SITE_LAYOUT } from "./layout";
import "./styles/index.scss";

const CSS_FONT_LINK = `<link
  href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,600,700&display=swap"
  rel="stylesheet"
/>`;

function log(...args: any[]): void {
  if (args.length === 0) {
    console.log();
  }
  args.forEach((a) => console.log(`[generator]: ${a}`));
}

export type Page = {
  relativePath: string;
  title: string;
  template: string;
  component: React.FC;
  subpages: Page[];
};

type SiteMap = string;

/**
 * Recursively render the pages defined in the site layout into
 * static HTML
 */
async function render(page: Page, pathStack: string[]): Promise<SiteMap> {
  return new Promise((resolve, reject) => {
    readFile(
      `./templates/${page.template}.html`,
      { encoding: "UTF-8" },
      (err, template) => {
        if (err) {
          reject(err);
        }

        const html = ReactDOMServer.renderToStaticMarkup(<page.component />);
        const outputPath = [...pathStack, page.relativePath].join("");

        mkdir(outputPath, { recursive: true }, (err) => {
          if (err) {
            reject(err);
          }

          const toReplace = [
            {
              key: "{{content}}",
              content: html,
            },
            {
              key: "{{baseurl}}",
              content: CSS_BASE,
            },
            {
              key: "{{cssfontlink}}",
              content: !PRINT_MODE ? CSS_FONT_LINK : "",
            },
            {
              key: "{{resumecssbase}}",
              content: R_CSS_BASE,
            },
            {
              key: "{{title}}",
              content: page.title,
            },
            {
              key: "_onkeyup",
              content: "onkeyup",
            },
          ];

          writeFile(
            `${outputPath}index.html`,
            templateReplace(template, toReplace),
            async (err) => {
              if (err) {
                reject(err);
              }

              const wg: Promise<SiteMap>[] = [];
              const sitemap = `<url><loc>https%3A//${URL}${[
                ...pathStack.slice(1),
                page.relativePath,
              ].join("")}</loc></url>`;

              page.subpages.forEach((subpage) => {
                wg.push(render(subpage, [...pathStack, page.relativePath]));
              });

              const childSiteMap = (await Promise.all(wg)).join("\n");
              resolve(`${sitemap}\n${childSiteMap}`);
            }
          );
        });
      }
    );
  });
}

export default async function main() {
  console.time("Time");
  log("Building website");
  log("Clearing old files");

  rmdir(OUTPUT_DIR);

  log("Rendering");
  mkdirSync(OUTPUT_DIR);
  mkdirSync(`${OUTPUT_DIR}/agents`);

  const renderPromise = render(SITE_LAYOUT, [OUTPUT_DIR]);

  writeFile(
    "build/robots.txt",
    templateReplace(readFileSync("templates/robots.txt").toString(), [
      { key: "{{URL}}", content: URL },
    ]),
    throwIfErr
  );

  writeFile(
    "build/404.html",
    templateReplace(readFileSync("templates/404.html").toString(), [
      {
        key: "{{baseurl}}",
        content: CSS_BASE,
      },
    ]),
    throwIfErr
  );

  copyFile("dist/generator.css", "build/styles.css", throwIfErr);
  copyFile("templates/CNAME", "build/CNAME", throwIfErr);
  copyFile("content/images/headshot.png", "build/headshot.png", throwIfErr);
  copyFile("content/images/sig.png", "build/sig.png", throwIfErr);

  agents.forEach((agent) =>
    copyFileSync(
      `content/images/agents/${agent}.png`,
      `build/agents/${agent}.png`
    )
  );

  const sitemap = await renderPromise;
  writeFileSync(
    "build/sitemap.xml",
    templateReplace(readFileSync("templates/sitemap.xml").toString(), [
      { key: "{{content}}", content: sitemap },
    ])
  );

  log("Finished.\n");
  console.timeEnd("Time");

  log();
  dirStat(OUTPUT_DIR);
  log();
}

main();
