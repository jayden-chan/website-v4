declare const PRINT_MODE: boolean;
declare const EMAIL: string;
declare const PHONE: string;

import React from 'react';

const headingbase = [
  'text-bold',
  'pb-2',
  'tracking-wider',
  'uppercase',
  'font-bold',
  'resume-major',
  'sm:tracking-widest',
];

const major = headingbase.concat(['text-3xl', 'mt-12']).join(' ');
const info = ['pr-12'].join(' ');
const pspace = ['mb-6 font-light'].join(' ');

const CoverLetter: React.FC = () => {
  return (
    <div className="w-1/2 mb-64">
      <h1 className={major}>Jayden Chan</h1>
      <div className="flex flex-row">
        <h4 className={info}>515-3381 Whittier Avenue Victoria, BC</h4>
        <h4 className={info} style={{textTransform: 'initial'}}>
          {EMAIL}
        </h4>
        <h4 className={info}>{PHONE}</h4>
      </div>

      <p className={`${pspace} mt-16`}>Hey there!</p>
      <p className={pspace}>
        Thank you for your kind consideration of my application for the Rust
        Intern position at Mozilla. I am a Software Engineering student at the
        University of Victoria with a passion for technology, design and
        software development. Over the past few years I have gained industry
        experience as a junior software developer and worked on a variety of
        open source projects. I hope to leverage this experience during my time
        at [[company]].
      </p>
      <p className={pspace}>
        Over the past year I have been involved in the development of several
        open source projects.
      </p>
      <p className={pspace}>
        In addition to the side projects I've worked on, I also have experience
        in industry. This summer I took the role of Lead Software Technician at
        a small, Calgary-based robotics firm called Bickert Robotics. I worked
        remotely on the software suite needed to power their autonomous
        bartender robot. This involved several components including a JavaScript
        web interface and Android app, as well as the embedded code to control
        the various mechanical systems. Throughout my time there, I developed
        proven management, technical, and leadership skills which can be
        leveraged during my co-op period at [[company]].
      </p>
      <p className={pspace}>
        After reviewing my resume, I hope you'll agree that I am the type of
        competent and competitive candidate you are looking for. I look forward
        to elaborating on how my specific skills and abilities will benefit your
        organization. Please contact me at (403) 874-9705 or via email at
        jaydencn7@gmail.com if you have any further inquiries. Thank you for
        your time and kind consideration, I look forward to hearing from you
        soon.
      </p>
      <p className={pspace} style={{marginBottom: '10px'}}>
        Sincerely,
      </p>
      {/*<img src={Sig} style={{width: "100px", marginBottom: "3px"}} alt="Jayden Chan"></img> */}
      <p>Jayden Chan</p>
    </div>
  );
};

export default CoverLetter;
