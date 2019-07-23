import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {readFile, writeFile, copyFileSync, mkdirSync} from 'fs';
import {sync as rmdir} from 'rimraf';

import {config} from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

import Home from './pages/Home';
import Resume from './pages/Resume';
import './styles/index.scss';

const SITE_LAYOUT = {
  index: {
    title: 'Jayden Chan',
    template: './templates/index.html',
    component: Home,
  },
  resume: {
    title: 'Resume - Jayden Chan',
    template: './templates/index.html',
    component: Resume,
  },
};

function renderPage(page: {
  path: string;
  template: string;
  component: React.FC;
  title: string;
}): void {
  return readFile(page.template, {encoding: 'UTF-8'}, (err, data) => {
    if (err) {
      throw err;
    }

    const html = ReactDOMServer.renderToStaticMarkup(<page.component />);
    writeFile(
      page.path,
      data.replace(/{{content}}/, html).replace(/{{title}}/, page.title),
      err => {
        if (err) throw err;
      },
    );
  });
}

export default function main() {
  console.log('Building website...');
  console.log('Clearing old files');
  rmdir('./build');

  console.log('Rendering...');

  Object.entries(SITE_LAYOUT).forEach(([key, value]) => {
    const dir = key === 'index' ? 'build' : `build/${key}`;
    const path = `${dir}/index.html`;

    mkdirSync(dir, {recursive: true});

    renderPage({
      path,
      template: value.template,
      component: value.component,
      title: value.title,
    });
  });

  copyFileSync('dist/index.css', 'build/styles.css');
  console.log('Finished.');
}

main();
