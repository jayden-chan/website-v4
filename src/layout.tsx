import React from 'react';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Cheat from './pages/cheat/Cheat';

export const SITE_LAYOUT = {
  relativePath: '/',
  title: 'Jayden Chan',
  template: './templates/landing.html',
  component: <Home />,
  subpages: [
    {
      relativePath: 'resume/',
      title: 'Resume - Jayden Chan',
      template: './templates/resume.html',
      component: <Resume />,
      subpages: [],
    },
    {
      relativePath: 'cheat/',
      title: 'Cheatsheet',
      template: './templates/cheat.html',
      component: <Cheat />,
      subpages: [],
    },
  ],
};
