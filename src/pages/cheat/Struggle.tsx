import React from 'react';
import CheatPage from '../../components/CheatPage';

// @ts-ignore
import {cards} from '../../../content/cheatsheets/struggle.toml';

const Struggle: React.FC = () => {
  return <CheatPage items={cards} />;
};

export default Struggle;
