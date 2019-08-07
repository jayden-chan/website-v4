import React from 'react';
import CheatPage from '../../components/CheatPage';

// @ts-ignore
import {cards as linux} from '../../../content/cheatsheets/linux.toml';
// @ts-ignore
import {cards as oneliners} from '../../../content/cheatsheets/oneliners.toml';
// @ts-ignore
import {cards as testing} from '../../../content/cheatsheets/test.toml';

function cardFilter(card: any): boolean {
  return !!card.struggle;
}

const Struggle: React.FC = () => {
  const cards = []
    .concat(linux.filter(cardFilter))
    .concat(oneliners.filter(cardFilter))
    .concat(testing.filter(cardFilter));
  return <CheatPage items={cards} title="SETTMMTOHTS" />;
};

export default Struggle;
