import React from 'react';

import {GITHUB} from '../../content/urls.json';

const iconLinkStyle = 'underline pr-4';

const Home: React.FC = () => {
  return (
    <div className="Home">
      <h1 className="text-5xl">Jayden Chan</h1>
      <p className="text-3xl">
        2B Software Engineering | University of Victoria
      </p>
      <a href="about" className={iconLinkStyle}>
        about
      </a>
      <a href={GITHUB} className={iconLinkStyle}>
        github
      </a>
      <a href="resume" className={iconLinkStyle}>
        resume
      </a>
      <a href="cheat" className={iconLinkStyle}>
        cheat
      </a>
    </div>
  );
};

export default Home;
