// Webpack injected variables
declare const URL: string;
declare const OUTPUT_DIR: string;
declare const CSS_BASE: string;
declare const R_CSS_BASE: string;
declare const PRINT_MODE: boolean;

import React from "react";
import ReactDOMServer from "react-dom/server";
import { minify } from "terser";

import {
  readFile,
  writeFile,
  readFileSync,
  writeFileSync,
  copyFile,
  mkdir,
  mkdirSync,
  readdirSync,
} from "fs";

import { sync as rmdir } from "rimraf";

import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import { throwIfErr, dirStat, templateReplace, htmlEscape } from "./utils";
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
  desc?: string;
  template: string;
  component: React.FC;
  subpages: Page[];
};

type SiteMap = string;

const templateTable = {
  baseurl: CSS_BASE,
  cssfontlink: !PRINT_MODE ? CSS_FONT_LINK : "",
  resumecssbase: R_CSS_BASE,
};

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

          const templateTableLocal = {
            content: html,
            title: page.title,
            desc: page.desc
              ? `\n    <meta name="description" content="${htmlEscape(
                  page.desc
                )}"/>`
              : "",
            ...templateTable,
          };

          const toReplace = [
            {
              key: /{{\s*script:(\w+)\s*}}/g,
              content: (_, p1) =>
                readFileSync(`dist/scripts/${p1}.js`, { encoding: "utf8" }),
            },
            {
              key: /{{\s*(\w+)\s*}}/g,
              content: (_, p1) => templateTableLocal[p1],
            },
            {
              key: /_onkeyup/g,
              content: () => "onkeyup",
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
  rmdir("dist/scripts");

  log("Rendering");
  mkdirSync(OUTPUT_DIR);
  mkdirSync(`${OUTPUT_DIR}/agents`);
  mkdirSync("dist/scripts");

  for (const script of readdirSync("templates/scripts")) {
    const minified = await minify(
      readFileSync(`templates/scripts/${script}`, { encoding: "utf8" })
    );
    writeFileSync(`dist/scripts/${script}`, minified.code);
  }

  const renderPromise = render(SITE_LAYOUT, [OUTPUT_DIR]);

  writeFile(
    "build/robots.txt",
    templateReplace(readFileSync("templates/robots.txt").toString(), [
      { key: /{{\s*URL\s*}}/g, content: () => URL },
    ]),
    throwIfErr
  );

  writeFile(
    "build/404.html",
    templateReplace(readFileSync("templates/404.html").toString(), [
      {
        key: /{{\s*(\w+)\s*}}/g,
        content: (_, p1) => templateTable[p1],
      },
    ]),
    throwIfErr
  );

  copyFile("dist/generator.css", "build/styles.css", throwIfErr);
  copyFile("templates/CNAME", "build/CNAME", throwIfErr);
  copyFile("content/images/headshot.png", "build/headshot.png", throwIfErr);
  copyFile("content/images/sig.png", "build/sig.png", throwIfErr);

  for (const agent of readdirSync("content/images/agents")) {
    copyFile(
      `content/images/agents/${agent}`,
      `build/agents/${agent}`,
      throwIfErr
    );
  }

  const sitemap = await renderPromise;
  writeFileSync(
    "build/sitemap.xml",
    templateReplace(readFileSync("templates/sitemap.xml").toString(), [
      { key: /{{\s*content\s*}}/g, content: () => sitemap },
    ])
  );

  log("Finished.\n");
  console.timeEnd("Time");

  log();
  dirStat(OUTPUT_DIR);
  log();
}

main();
