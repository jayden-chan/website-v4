import React from 'react';
import CheatPage from '../../components/CheatPage';

// @ts-ignore
import {cards, title} from '../../../content/cheatsheets/test.toml';

const Test: React.FC = () => {
  return <CheatPage items={cards} title={title} />;
};

export default Test;
