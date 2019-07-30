import React from 'react';
import CheatPage from '../../components/CheatPage';

// @ts-ignore
import {cards} from '../../../content/cheatsheets/test.toml';

const Test: React.FC = () => {
  return <CheatPage items={cards} title="Test" />;
};

export default Test;
