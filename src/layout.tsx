import React from 'react';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Cheat from './pages/cheat/index';
import Test from './pages/cheat/Test';
import Struggle from './pages/cheat/Struggle';
import Linux from './pages/cheat/Linux';
import OneLiners from './pages/cheat/OneLiners';

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
          relativePath: 'programming/',
          title: 'Cheatsheet - Programming',
          template: 'cheat',
          component: <Test />,
          subpages: [],
        },
        {
          relativePath: 'struggle/',
          title: 'Cheatsheet - SETTMMTOHTS',
          template: 'cheat',
          component: <Struggle />,
          subpages: [],
        },
        {
          relativePath: 'linux/',
          title: 'Cheatsheet - Linux',
          template: 'cheat',
          component: <Linux />,
          subpages: [],
        },
        {
          relativePath: 'oneliners/',
          title: 'Cheatsheet - One-liners',
          template: 'cheat',
          component: <OneLiners />,
          subpages: [],
        },
      ],
    },
  ],
};
