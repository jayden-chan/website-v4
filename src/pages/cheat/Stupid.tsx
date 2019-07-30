import React from 'react';
import CheatPage from '../../components/CheatPage';

// @ts-ignore
import {cards} from '../../../content/cheatsheets/stupid.toml';

const Stupid: React.FC = () => {
  return <CheatPage items={cards} />;
};

export default Stupid;
