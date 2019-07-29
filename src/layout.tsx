import React from 'react';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Cheat from './pages/cheat/index';
import Vim from './pages/cheat/Vim';

export const SITE_LAYOUT = {
  relativePath: '/',
  title: 'Jayden Chan',
  template: 'landing',
  component: <Home />,
  subpages: [
    {
      relativePath: 'resume/',
      title: 'Resume - Jayden Chan',
      template: 'resume',
      component: <Resume />,
      subpages: [],
    },
    {
      relativePath: 'cheat/',
      title: 'Cheatsheet',
      template: 'cheat',
      component: <Cheat />,
      subpages: [
        {
          relativePath: 'vim/',
          title: 'Cheatsheet - Vim',
          template: 'cheat',
          component: <Vim />,
          subpages: [],
        },
      ],
    },
  ],
};
