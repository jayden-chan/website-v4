import React from 'react';
const h1 = ['text-5xl', 'font-bold'].join(' ');
const h2 = ['text-3xl', 'mt-10'].join(' ');

const links = [
  {
    title: 'Test',
    href: '/cheat/test',
  },
  {
    title: 'Linux',
    href: '/cheat/linux',
  },
  {
    title: 'One-liners',
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
