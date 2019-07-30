import React from 'react';
import CheatPage from '../../components/CheatPage';

// @ts-ignore
import {cards} from '../../../content/cheatsheets/linux.toml';

const Linux: React.FC = () => {
  return <CheatPage items={cards} title="Linux" />;
};

export default Linux;
