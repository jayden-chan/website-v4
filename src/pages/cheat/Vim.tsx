import React from 'react';
import CheatPage from '../../components/CheatPage';

// @ts-ignore
import {cards} from '../../../content/cheatsheets/vim.toml';

const Vim: React.FC = () => {
  return <CheatPage items={cards} title="Vim" />;
};

export default Vim;
