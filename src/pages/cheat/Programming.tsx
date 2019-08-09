import React from 'react';
import CheatPage from '../../components/CheatPage';

// @ts-ignore
import {cards, title} from '../../../content/cheatsheets/programming.toml';

const Programming: React.FC = () => {
  return <CheatPage items={cards} title={title} />;
};

export default Programming;
