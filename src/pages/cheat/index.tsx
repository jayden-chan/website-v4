import React from 'react';
const h1 = ['text-5xl', 'font-bold'].join(' ');
const h2 = ['text-3xl', 'mt-10'].join(' ');

// @ts-ignore
import {title as linux} from '../../../content/cheatsheets/linux.toml';
// @ts-ignore
import {title as oneliners} from '../../../content/cheatsheets/oneliners.toml';
// @ts-ignore
import {title as programming} from '../../../content/cheatsheets/programming.toml';

const links = [
  {
    title: programming,
    href: '/cheat/programming',
  },
  {
    title: linux,
    href: '/cheat/linux',
  },
  {
    title: oneliners,
    href: '/cheat/oneliners',
  },
  {
    title: '"stupid errors that took me more than 1 hour to solve"',
    href: '/cheat/struggle',
  },
];

const Home: React.FC = () => {
  return (
    <div className="fadein mt-32">
      <h1 className={h1}>Programming / Linux / Tech Cheatsheets</h1>
      <ul className="list-disc ml-5">
        {links.map((link, idx) => {
          return (
            <li key={idx}>
              <h2 className={h2}>
                <a href={link.href} className="ml-2">
                  {link.title}
                </a>
              </h2>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
