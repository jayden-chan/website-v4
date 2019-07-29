import React from 'react';
import {faGithub} from '@fortawesome/free-brands-svg-icons';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

// @ts-ignore
import {GITHUB} from '../../content/urls.toml';
import * as resume from '../../content/resume.json';

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

const wrapper = [
  'fadein',
  'resume',
  'flex',
  'flex-col',
  'w-full',
  'mt-10',
  'mb-32',
  'items-center',
  'lg:items-start',
  'lg:flex-row-reverse',
  'lg:w-5/6',
].join(' ');

const major = [
  'major',
  'text-3xl',
  'text-bold',
  'pb-2',
  'my-8',
  'tracking-wider',
  'uppercase',
  'font-bold',
  'resume-major',
  'sm:tracking-widest',
].join(' ');

const minor = ['text-xl', 'tracking-wider', 'uppercase', 'font-bold'].join(' ');

const iconWord = 'ml-3';
const iconWordLarge = 'ml-4';
const skill = 'mt-1';

const Resume: React.FC = () => {
  return (
    <div className={wrapper}>
      <div className="mx-10 flex-shrink-0 lg:mx-0">
        <h1 className={major}>
          <FontAwesomeIcon icon={faVoicemail} />
          <span className={iconWordLarge}>Contact</span>
        </h1>

        <div className="mb-6">
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
              <span className={iconWord}>(403) 874-9705</span>
            </li>
            <li>References available upon request</li>
          </ul>
        </div>

        <div>
          <h2 className={major}>
            <FontAwesomeIcon icon={faWrench} />
            <span className={iconWordLarge}>Skills</span>
          </h2>

          <ul className="mb-10">
            <h3 className={minor}>Langauges</h3>
            {resume.skills.lang.map((e, idx) => (
              <li className={skill} key={idx}>
                {e}
              </li>
            ))}
          </ul>
          <ul className="mb-10">
            <h3 className={minor}>Tools</h3>
            {resume.skills.tools.map((e, idx) => (
              <li className={skill} key={idx}>
                {e}
              </li>
            ))}
          </ul>
          <ul className="mb-10">
            <h3 className={minor}>Technologies</h3>
            {resume.skills.tech.map((e, idx) => (
              <li className={skill} key={idx}>
                {e}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-10 lg:mr-10 lg:ml-0">
        <h1 className={major}>
          <FontAwesomeIcon icon={faSuitcase} />
          <span className={iconWordLarge}>Experience</span>
        </h1>

        {resume.experience.map((job, idx) => {
          return (
            <section className="block mb-10" key={idx}>
              <header>
                <div>
                  <h3 className={minor + ' inline-block'}>{job.title}</h3>
                  <span className="lg:float-right block">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <span className={iconWord}>{job.location}</span>
                  </span>
                </div>
                <div className="mb-4">
                  <span>{job.company}</span>
                  <span className="lg:float-right block time">{job.time}</span>
                </div>
              </header>

              <div>
                <ul className="list-disc ml-5">
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
          <span className={iconWordLarge}>Projects</span>
        </h1>

        {resume.projects.map((proj, idx) => {
          return (
            <section className="block mb-10" key={idx}>
              <header>
                <div>
                  <h3 className={minor + ' inline-block'}>{proj.title}</h3>
                  {(() => {
                    if (proj.github) {
                      return (
                        <a
                          href={`${GITHUB}${proj.github}`}
                          className={iconWord}>
                          <FontAwesomeIcon icon={faGithub} />
                        </a>
                      );
                    } else {
                      return <span className="time"> (closed source)</span>;
                    }
                  })()}
                </div>
                <div className="mb-4">
                  <span>{proj.stack}</span>
                  <span className="lg:float-right block">{proj.time}</span>
                </div>
              </header>

              <div>
                <ul className="list-disc ml-5">
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
          <span className={iconWordLarge}>Education</span>
        </h1>
        <section className="block mb-10">
          <header>
            <div>
              <h3 className={minor + ' inline-block'}>
                University of Victoria
              </h3>
              <span className="lg:float-right block">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <span className={iconWord}>Victoria, Canada</span>
              </span>
            </div>
            <div className="mb-4">
              <span>Candidate for Bachelor of Software Engineering</span>
              <span className="lg:float-right block time">
                2017 - 2022 (expected)
              </span>
            </div>
          </header>

          <div>
            <ul className="list-disc ml-5">
              <li>
                Finished in top 10% of students enrolled in first year Computer
                Science courses
              </li>
            </ul>
          </div>
        </section>

        <h1 className={major}>
          <FontAwesomeIcon icon={faTrophy} />
          <span className={iconWordLarge}>Awards</span>
        </h1>

        {resume.awards.map((award, idx) => {
          return (
            <section className="block mb-3" key={idx}>
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
