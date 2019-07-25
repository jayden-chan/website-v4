import React from 'react';

const link = 'underline mr-4';
const Home: React.FC = () => {
  return (
    <div className="fadein">
      <h1 className="text-5xl">Jayden Chan</h1>
      <p className="text-3xl">
        2B Software Engineering |{' '}
        <a href="https://uvic.ca">University of Victoria</a>
      </p>
      <a href="about" className={link}>
        about
      </a>
      <a href={'/'} className={link}>
        github
      </a>
      <a href="resume" className={link}>
        resume
      </a>
      <a href="cheat" className={link}>
        cheat
      </a>
    </div>
  );
};

export default Home;
