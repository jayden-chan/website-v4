import React from 'react';
import CheatPage from '../../components/CheatPage';

import vim from '../../../content/cheatsheets/vim.json';

const Vim: React.FC = () => {
  return <CheatPage items={vim} />;
};

export default Vim;
