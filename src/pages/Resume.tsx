import React from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import {
  faEnvelope,
  faFolderOpen,
  faGlobeAmericas,
  faGraduationCap,
  faMapMarkerAlt,
  faPhone,
  faSuitcase,
  faTrophy,
  faVoicemail,
  faWrench,
} from '@fortawesome/free-solid-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {GITHUB} from '../../content/urls.json';
import * as resume from '../../content/resume.json';

const wrapper = [
  'resume',
  'flex',
  'flex-col',
  'w-full',
  'pt-10',
  'pb-32',
  'items-center',
  'lg:items-start',
  'lg:flex-row-reverse',
  'lg:w-4/5',
].join(' ');

const major = [
  'text-3xl',
  'text-bold',
  'py-2',
  'tracking-wider',
  'sm:tracking-widest',
  'uppercase',
  'font-bold',
].join(' ');

const minor = ['text-xl', 'tracking-wider', 'uppercase', 'font-bold'].join(' ');

const iconWord = 'pl-3';
const iconWordLarge = 'pl-4';
const skill = 'pt-1';

const Resume: React.FC = () => {
  return (
    <div className={wrapper}>
      <div className="px-10 flex-shrink-0 lg:px-0">
        <h1 className={major}>
          <FontAwesomeIcon icon={faVoicemail} />
          <text className={iconWordLarge}>Contact</text>
        </h1>

        <div className="pb-6">
          <ul>
            <li>
              <FontAwesomeIcon icon={faGithub} />
              <a href={GITHUB} className={iconWord}>
                github.com/jayden-chan
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faEnvelope} />
              <a href="mailto:jaydencn7@gmail.com" className={iconWord}>
                jaydencn7@gmail.com
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faGlobeAmericas} />
              <a href="https://jayden-chan.me" className={iconWord}>
                jayden-chan.me
              </a>
            </li>
            <li>
              <FontAwesomeIcon icon={faPhone} />
              <text className={iconWord}>(403) 874-9705</text>
            </li>
            <li>References available upon request</li>
          </ul>
        </div>

        <div>
          <h2 className={major}>
            <FontAwesomeIcon icon={faWrench} />
            <text className={iconWordLarge}>Skills</text>
          </h2>

          <ul className="pb-10">
            <h3 className={minor}>Langauges</h3>
            {resume.skills.lang.map((e, idx) => (
              <li className={skill} key={idx}>
                {e}
              </li>
            ))}
          </ul>
          <ul className="pb-10">
            <h3 className={minor}>Tools</h3>
            {resume.skills.tools.map((e, idx) => (
              <li className={skill} key={idx}>
                {e}
              </li>
            ))}
          </ul>
          <ul className="pb-10">
            <h3 className={minor}>Technologies</h3>
            {resume.skills.tech.map((e, idx) => (
              <li className={skill} key={idx}>
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="px-10 lg:pr-10 lg:pl-0">
        <h1 className={major}>
          <FontAwesomeIcon icon={faSuitcase} />
          <text className={iconWordLarge}>Experience</text>
        </h1>

        {resume.experience.map((job, idx) => {
          return (
            <section className="block pb-10" key={idx}>
              <header>
                <div>
                  <h3 className={minor + ' inline-block'}>{job.title}</h3>
                  <span className="lg:float-right block">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <text className={iconWord}>{job.location}</text>
                  </span>
                </div>
                <div className="pb-4">
                  <span>{job.company}</span>
                  <span className="lg:float-right block time">{job.time}</span>
                </div>
              </header>

              <div>
                <ul className="list-disc pl-5">
                  {job.roles.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}

        <h1 className={major}>
          <FontAwesomeIcon icon={faFolderOpen} />
          <text className={iconWordLarge}>Projects</text>
        </h1>

        {resume.projects.map((proj, idx) => {
          return (
            <section className="block pb-10" key={idx}>
              <header>
                <div>
                  <h3 className={minor + ' inline-block'}>{proj.title}</h3>
                </div>
                <div className="pb-4">
                  <span>{proj.stack}</span>
                  <span className="lg:float-right block">{proj.time}</span>
                </div>
              </header>

              <div>
                <ul className="list-disc pl-5">
                  {proj.roles.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>
              </div>
            </section>
          );
        })}

        <h1 className={major}>
          <FontAwesomeIcon icon={faGraduationCap} />
          <text className={iconWordLarge}>Education</text>
        </h1>
        <section className="block pb-10">
          <header>
            <div>
              <h3 className={minor + ' inline-block'}>
                University of Victoria
              </h3>
              <span className="lg:float-right block">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <text className={iconWord}>Victoria, Canada</text>
              </span>
            </div>
            <div className="pb-4">
              <span>Candidate for Bachelor of Software Engineering</span>
              <span className="lg:float-right block time">
                2017 - 2022 (expected)
              </span>
            </div>
          </header>

          <div>
            <ul className="list-disc pl-5">
              <li>
                Finished in top 10% of students enrolled in first year Computer
                Science courses
              </li>
            </ul>
          </div>
        </section>

        <h1 className={major}>
          <FontAwesomeIcon icon={faTrophy} />
          <text className={iconWordLarge}>Awards</text>
        </h1>

        {resume.awards.map((award, idx) => {
          return (
            <section className="block pb-3" key={idx}>
              <header>
                <div>
                  <h3 className={minor + ' inline-block'}>{award.result}</h3>
                </div>
                <div>
                  <span className="time">{award.desc}</span>
                  <span className="lg:float-right block">{award.time}</span>
                </div>
              </header>
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Resume;
