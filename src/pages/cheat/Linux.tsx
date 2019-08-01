import React from 'react';
import CheatPage from '../../components/CheatPage';

// @ts-ignore
import {cards, title} from '../../../content/cheatsheets/linux.toml';

const Linux: React.FC = () => {
  return <CheatPage items={cards} title={title} />;
};

export default Linux;
