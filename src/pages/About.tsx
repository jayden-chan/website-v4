// Webpack injected
declare const GITHUB: string;

import React from "react";

const pStyle = "mb-5";
const aStyle = "underline";

const About: React.FC = () => {
  return (
    <div className="fadein mx-5 md:max-w-3xl">
      <h1 className="text-5xl font-bold major mb-6">About</h1>
      <div className="font-light">
        <span className="hidden sm:inline float-left w-1/3 mr-6">
          <img className="w-full" src="/headshot.png" />
        </span>
        <p className={pStyle}>Hello there!</p>

        <p className={pStyle}>
          My name is Jayden Chan. I am a Software Engineering student at the
          University of Victoria with a passion for technology, design, and
          software development. In high school I got started with programming by
          joining my school's robotics team,{" "}
          <a className={aStyle} href="https://4334.ca">
            Alberta Tech Alliance
          </a>
          . The experience inspired me to pursue a career in Software
          Engineering, and since then I have been working on developing my skill
          set through open source projects and industry experience.
        </p>

        <p className={pStyle}>
          I spend much of my free time designing, building, and testing personal
          and club-related projects. Most of them are open source and available
          on my{" "}
          <a className={aStyle} href={`https://github.com/${GITHUB}`}>
            GitHub
          </a>
          .
        </p>

        <p className={pStyle}>
          You can check out my resume{" "}
          <a className={aStyle} href={"https://jayden-chan.me/resume"}>
            here
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
