// Webpack injected variables
declare const URL: string;
declare const OUTPUT_DIR: string;

import {ReactElement} from 'react';
import ReactDOMServer from 'react-dom/server';

import {
  readFile,
  writeFile,
  readFileSync,
  writeFileSync,
  copyFile,
  mkdir,
} from 'fs';

import {sync as rmdir} from 'rimraf';

import {config} from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import {throwIfErr, dirStat, templateReplace} from './utils';
import {SITE_LAYOUT} from './layout';
import './styles/index.scss';

function log(...args: any[]): void {
  if (args.length === 0) {
    console.log();
  }
  args.forEach(a => console.log(`[generator]: ${a}`));
}

type Page = {
  relativePath: string;
  title: string;
  template: string;
  component: ReactElement;
  reactsrc?: string;
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
      {encoding: 'UTF-8'},
      (err, template) => {
        if (err) {
          reject(err);
        }

        const html = ReactDOMServer.renderToStaticMarkup(page.component);
        const outputPath = [...pathStack, page.relativePath].join('');

        mkdir(outputPath, {recursive: true}, err => {
          if (err) {
            reject(err);
          }

          const toReplace = [
            {
              key: '{{content}}',
              content: html,
            },
            {
              key: '{{title}}',
              content: page.title,
            },
            {
              key: '_onkeyup',
              content: 'onkeyup',
            },
          ];

          writeFile(
            `${outputPath}index.html`,
            templateReplace(template, toReplace),
            async err => {
              if (err) {
                reject(err);
              }

              const wg: Promise<SiteMap>[] = [];
              const sitemap = `<url><loc>https%3A//${URL}${[
                ...pathStack.slice(1),
                page.relativePath,
              ].join('')}</loc></url>`;

              page.subpages.forEach(subpage => {
                wg.push(render(subpage, [...pathStack, page.relativePath]));
              });

              const returnedSitemap = (await Promise.all(wg)).join('\n');
              resolve(`${sitemap}\n${returnedSitemap}`);
            },
          );
        });
      },
    );
  });
}

export default async function main() {
  console.time('Time');
  log('Building website');
  log('Clearing old files');

  rmdir(OUTPUT_DIR);

  log('Rendering');
  await mkdir(OUTPUT_DIR, err => throwIfErr(err));

  const renderPromise = render(SITE_LAYOUT, [OUTPUT_DIR]);

  writeFile(
    'build/robots.txt',
    templateReplace(readFileSync('templates/robots.txt').toString(), [
      {key: '{{URL}}', content: URL},
    ]),
    err => throwIfErr(err),
  );

  copyFile('dist/generator.css', 'build/styles.css', err => throwIfErr(err));
  copyFile('templates/404.html', 'build/404.html', err => throwIfErr(err));
  copyFile('content/images/headshot.png', 'build/headshot.png', err =>
    throwIfErr(err),
  );

  const sitemap = await renderPromise;
  writeFileSync(
    'build/sitemap.xml',
    templateReplace(readFileSync('templates/sitemap.xml').toString(), [
      {key: '{{content}}', content: sitemap},
    ]),
  );

  log('Finished.\n');
  console.timeEnd('Time');

  log();
  dirStat(OUTPUT_DIR);
  log();
}

main();
