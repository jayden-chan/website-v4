import React from 'react';
import CheatPage from '../../components/CheatPage';

// @ts-ignore
import {cards} from '../../../content/cheatsheets/vim.toml';
console.log(cards);

const Vim: React.FC = () => {
  return <CheatPage items={cards} />;
};

export default Vim;
