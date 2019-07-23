import React, {ReactElement} from 'react';
import ReactDOMServer from 'react-dom/server';
import {readFile, writeFile} from 'fs';

import Home from './pages/Home';

const SITE_LAYOUT = {
  index: {
    title: 'Jayden Chan',
    template: './templates/index.html',
    component: Home,
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

    const html = ReactDOMServer.renderToString(<page.component />);
    writeFile(
      page.path,
      data.replace(/{{content}}/, html).replace(/{{title}}/, page.title),
      err => {
        if (err) throw err;
      },
    );
  });
}

Object.entries(SITE_LAYOUT).forEach(([key, value]) => {
  const path = key === 'index' ? `build/index.html` : `build/${key}/index.html`;

  renderPage({
    path,
    template: value.template,
    component: value.component,
    title: value.title,
  });
});
