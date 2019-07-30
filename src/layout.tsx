import React from 'react';

import Home from './pages/Home';
import Resume from './pages/Resume';
import Cheat from './pages/cheat/index';
import Vim from './pages/cheat/Vim';
import Stupid from './pages/cheat/Stupid';
import Linux from './pages/cheat/Linux';

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
        {
          relativePath: 'stupid/',
          title: 'Cheatsheet - SETTMMTOHTS',
          template: 'cheat',
          component: <Stupid />,
          subpages: [],
        },
        {
          relativePath: 'linux/',
          title: 'Cheatsheet - Linux',
          template: 'cheat',
          component: <Linux />,
          subpages: [],
        },
      ],
    },
  ],
};
