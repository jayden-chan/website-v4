// Webpack injected variables
declare const PRINT_MODE: boolean;
declare const URL: string;
declare const GITHUB: string;
declare const EMAIL: string;
declare const PHONE: string;

import React from "react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// @ts-ignore -- complains about toml import
import * as resume from "../../content/resume.toml";

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
  faMugHot
} from "@fortawesome/free-solid-svg-icons";

const plg = PRINT_MODE ? "" : "lg:";
// const skipPrint = i => !PRINT_MODE || i.print === true;
const skipPrint = i => true;

const np = (text: string) => {
  return !PRINT_MODE ? text : "";
};

const p = (print: string, noprint: string) => {
  return PRINT_MODE ? print : noprint;
};

// prettier-ignore
const wrapper = [
  'pr-10',
  'pl-10',
  'w-full',
  np('items-center'),
  p('mt-5', 'mt-10'),
  p('mb-64', 'mb-32'),
  'fadein',
  'resume',
  'lg:w-5/6',
  `${plg}pr-0`,
  `lg:pl-0`,
].join(' ');

const cols = [
  "flex",
  np("flex-col"),
  `lg:items-start`,
  `${plg}flex-row-reverse`
].join(" ");

const headingbase = [
  "text-bold",
  "pb-2",
  "tracking-wider",
  "uppercase",
  "font-bold",
  "resume-major",
  "sm:tracking-widest"
];

const major = headingbase
  .concat(["major", p("text-2xl", "text-3xl"), p("my-8", "my-8")])
  .join(" ");

const name = headingbase.concat(["text-3xl", "mt-4"]).join(" ");

const minor = [
  p("text-xl", "text-xl"),
  "tracking-wider",
  "uppercase",
  "font-bold"
].join(" ");

const section = ["block", p("mb-8", "mb-10")].join(" ");

const rightFloat = [`${plg}float-right`, "block", "text-lg"].join(" ");
const iconWord = "text-xl ml-3";
const iconWordLarge = "ml-4";
const skill = "mt-1";

const Resume: React.FC = () => {
  return (
    <div className={wrapper}>
      <h1 className={`${name}`} style={{ marginBottom: -20 }}>
        Jayden Chan
      </h1>
      <div className={cols}>
        <div className={`flex-shrink-0`}>
          <h1 className={major}>
            <FontAwesomeIcon icon={faVoicemail} />
            <span className={iconWordLarge}>Contact</span>
          </h1>

          <div className="mb-6">
            <ul>
              <li>
                <FontAwesomeIcon icon={faGithub} />
                <a href={`https://github.com/${GITHUB}`} className={iconWord}>
                  {`github.com/${GITHUB}`}
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faEnvelope} />
                <a href={`mailto:${EMAIL}`} className={iconWord}>
                  {EMAIL}
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faGlobeAmericas} />
                <a href={`https://${URL}`} className={iconWord}>
                  {URL}
                </a>
              </li>
              <li>
                <FontAwesomeIcon icon={faPhone} />
                <span className={iconWord}>{PHONE}</span>
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
              <h3 className={minor}>Languages</h3>
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

          <h1 className={major}>
            <FontAwesomeIcon icon={faMugHot} />
            <span className={iconWordLarge}>Interests</span>
          </h1>

          <div className="mb-6">
            <ul>
              {resume.interests.map((e, idx) => (
                <li className={skill} key={idx}>
                  {e}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className={`${plg}mr-10`}>
          <h1 className={major}>
            <FontAwesomeIcon icon={faSuitcase} />
            <span className={iconWordLarge}>Experience</span>
          </h1>

          {resume.experience.filter(skipPrint).map((job, idx) => {
            return (
              <section className={section} key={idx}>
                <header>
                  <div>
                    <h3 className={minor + " inline-block"}>{job.title}</h3>
                    <span className={rightFloat}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                      <span className={iconWord}>{job.location}</span>
                    </span>
                  </div>
                  <div className="mb-4">
                    <span className="text-lg">{job.company}</span>
                    <span className={`${rightFloat} time`}>{job.time}</span>
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

          {resume.projects.filter(skipPrint).map((proj, idx) => {
            return (
              <section className={section} key={idx}>
                <header>
                  <div>
                    <h3 className={minor + " inline-block"}>{proj.title}</h3>
                    {(() => {
                      if (proj.github) {
                        return (
                          <a
                            href={`https://github.com/${GITHUB}/${proj.github}`}
                            className={iconWord}
                          >
                            <FontAwesomeIcon icon={faGithub} />
                          </a>
                        );
                      } else {
                        return (
                          <span className="time text-lg"> (closed source)</span>
                        );
                      }
                    })()}
                  </div>
                  <div className="mb-4">
                    <span className="text-lg">{proj.stack}</span>
                    <span className={rightFloat}>{proj.time}</span>
                  </div>
                </header>

                <div>
                  <ul className="list-disc ml-5">
                    {proj.roles.map((r, idx) => {
                      if (
                        PRINT_MODE &&
                        r.startsWith("Created a moving-average")
                      ) {
                        return (
                          <li className="pb-10" key={idx}>
                            {r}
                          </li>
                        );
                      }

                      return <li key={idx}>{r}</li>;
                    })}
                  </ul>
                </div>
              </section>
            );
          })}

          <h1 className={major}>
            <FontAwesomeIcon icon={faGraduationCap} />
            <span className={iconWordLarge}>Education</span>
          </h1>
          <section className={section}>
            <header>
              <div>
                <h3 className={minor + " inline-block"}>
                  University of Victoria
                </h3>
                <span className={rightFloat}>
                  <FontAwesomeIcon icon={faMapMarkerAlt} />
                  <span className={iconWord}>Victoria, Canada</span>
                </span>
              </div>
              <div className="mb-4">
                <span className="text-lg">
                  Candidate for Bachelor of Software Engineering
                </span>
                <span className={`${rightFloat} time`}>
                  2017 - 2022 (expected)
                </span>
              </div>
            </header>
          </section>

          {(() => {
            if (true) {
              return (
                <h1 className={major}>
                  <FontAwesomeIcon icon={faTrophy} />
                  <span className={iconWordLarge}>Awards</span>
                </h1>
              );
            }
          })()}

          {(() => {
            if (true) {
              return resume.awards.map((award, idx) => {
                return (
                  <section className="block mb-3" key={idx}>
                    <header>
                      <div>
                        <h3 className={minor + " inline-block"}>
                          {award.result}
                        </h3>
                      </div>
                      <div>
                        <span className={`time text-lg`}>{award.desc}</span>
                        <span className={rightFloat}>{award.time}</span>
                      </div>
                    </header>
                  </section>
                );
              });
            }
          })()}
        </div>
      </div>
    </div>
  );
};

export default Resume;
