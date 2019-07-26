import {ReactElement} from 'react';
import ReactDOMServer from 'react-dom/server';

import {
  readFile,
  writeFile,
  copyFileSync,
  mkdirSync,
  lstatSync,
  readdir,
} from 'fs';
import {sync as rmdir} from 'rimraf';

import {config} from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import {formatSize} from './utils';
import {SITE_LAYOUT} from './layout';
import './styles/index.scss';

const OUTPUT_DIR = './build';

const log = (...args: any[]) => {
  if (args.length === 0) {
    console.log();
  }
  args.forEach(a => console.log(`[rstatic]: ${a}`));
};

type Page = {
  relativePath: string;
  title: string;
  template: string;
  component: ReactElement;
  subpages: Page[];
};

/**
 * Recursively render the pages defined in the site layout into
 * static HTML
 */
function render(page: Page, pathStack: string[]): void {
  readFile(page.template, {encoding: 'UTF-8'}, (err, template) => {
    if (err) {
      throw err;
    }

    const html = ReactDOMServer.renderToStaticMarkup(page.component);
    const outputPath = [...pathStack, page.relativePath].join('');

    mkdirSync(outputPath, {recursive: true});

    writeFile(
      `${outputPath}index.html`,
      template.replace(/{{content}}/, html).replace(/{{title}}/, page.title),
      err => {
        if (err) throw err;

        page.subpages.forEach(subpage => {
          render(subpage, [...pathStack, page.relativePath]);
        });
      },
    );
  });
}

export default function main() {
  console.time('time');
  log();
  log('Building website');
  log('Clearing old files');
  rmdir(OUTPUT_DIR);

  log('Rendering');

  mkdirSync(OUTPUT_DIR);
  render(SITE_LAYOUT, [OUTPUT_DIR]);

  copyFileSync('dist/index.css', 'build/styles.css');
  copyFileSync('templates/404.html', 'build/404.html');
  log('Finished.\n');
  console.timeEnd('time');
  log();
}

main();
