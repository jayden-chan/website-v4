import React from 'react';
import CheatPage from '../../components/CheatPage';

// @ts-ignore
import {cards} from '../../../content/cheatsheets/oneliners.toml';

const OneLiners: React.FC = () => {
  return <CheatPage items={cards} title="One-liners" />;
};

export default OneLiners;
