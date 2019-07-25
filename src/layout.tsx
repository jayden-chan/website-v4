import React from 'react';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Cheat from './pages/cheat/Cheat';

export const SITE_LAYOUT = {
  relPath: '/',
  title: 'Jayden Chan',
  template: './templates/landing.html',
  component: <Home />,
  subpages: [
    {
      relPath: 'resume/',
      title: 'Resume - Jayden Chan',
      template: './templates/resume.html',
      component: <Resume />,
      subpages: [],
    },
    {
      relPath: 'cheat/',
      title: 'Cheatsheet',
      template: './templates/landing.html',
      component: <Cheat />,
      subpages: [],
    },
  ],
};
