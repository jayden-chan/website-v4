import {ReactElement} from 'react';
import ReactDOMServer from 'react-dom/server';
import {readFile, writeFile, copyFileSync, mkdirSync} from 'fs';
import {sync as rmdir} from 'rimraf';

import {config} from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import {SITE_LAYOUT} from './layout';
import './styles/index.scss';

const OUTPUT_DIR = './build';

type Page = {
  relPath: string;
  title: string;
  template: string;
  component: ReactElement;
  subpages: Page[];
};

function render(page: Page, pathStack: string[]): void {
  readFile(page.template, {encoding: 'UTF-8'}, (err, template) => {
    if (err) {
      throw err;
    }

    const html = ReactDOMServer.renderToStaticMarkup(page.component);
    const outputPath = [...pathStack, page.relPath].join('');

    mkdirSync(outputPath, {recursive: true});

    writeFile(
      `${outputPath}index.html`,
      template.replace(/{{content}}/, html).replace(/{{title}}/, page.title),
      err => {
        if (err) throw err;

        page.subpages.forEach(subpage => {
          render(subpage, [...pathStack, page.relPath]);
        });
      },
    );
  });
}

export default function main() {
  console.log('Building website...');
  console.log('Clearing old files');
  rmdir(OUTPUT_DIR);

  console.log('Rendering...');

  mkdirSync(OUTPUT_DIR);
  render(SITE_LAYOUT, [OUTPUT_DIR]);

  copyFileSync('dist/index.css', 'build/styles.css');
  copyFileSync('templates/404.html', 'build/404.html');
  console.log('Finished.\n');
}

main();
