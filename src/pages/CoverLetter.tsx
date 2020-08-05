declare const EMAIL: string;
declare const PHONE: string;

import React from "react";

import Sig from "../../content/images/sig.png";

const headingbase = [
  "text-bold",
  "pb-2",
  "tracking-wider",
  "uppercase",
  "font-bold",
  "resume-major",
  "sm:tracking-widest",
];

const major = headingbase.concat(["text-4xl", "mt-12"]).join(" ");
const info = ["pr-12", "text-xl"].join(" ");
const pspace = ["mb-6 font-light text-xl"].join(" ");

const CoverLetter = () => {
  return (
    <div className="w-5/6 mb-64">
      <h1 className={major}>Jayden Chan</h1>
      <div className="flex flex-row">
        <h4 className={info}>515-3381 Whittier Avenue Victoria, BC</h4>
        <h4 className={info} style={{ textTransform: "initial" }}>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </h4>
        <h4 className={info}>{PHONE}</h4>
      </div>

      <p className={`${pspace} mt-16`}>Hey there!</p>
      <p className={pspace}>
        Thank you for your kind consideration of my application for the Rust
        Intern position at Mozilla. My name is Jayden, I'm a Software
        Engineering student at the University of Victoria with a passion for
        technology, design and software development. Over the past few years I
        have gained industry experience as a junior software developer and
        worked on a variety of open source projects. I hope to leverage this
        experience during my time at Mozilla.
      </p>
      <p className={pspace}>
        I started working with Rust about 1 year ago by writing an assembler for
        the AVR Language. Since then I've continued to work on a variety of Rust
        projects including a Snake AI and a Raytracer. I'm interested in getting
        some professional experience with it now, which is why this opportunity
        is particularly exciting for me.
      </p>
      <p className={pspace}>
        For the past 10 months I've been working as a developer intern at
        SaaSquatch, a local company specializing in automated marketing and
        customer growth. I helped design and implement a new customer analytics
        platform, as well as a development and testing library for SaaSquatch
        Growth Automation Programs. I'm now working part-time writing unit and
        integration tests.
      </p>
      <p className={pspace}>
        I hope you will agree that I am the type of competent and competitive
        candidate you are looking for. Please contact me at (403) 874-9705 or
        via email at jaydencn7@gmail.com if you have any further inquiries.
        Thank you for your time and kind consideration, I look forward to
        hearing from you soon.
      </p>
      <p className={pspace} style={{ marginBottom: "10px" }}>
        Sincerely,
      </p>
      <img
        src="../sig.png"
        style={{ width: "100px", marginBottom: "3px" }}
        alt="signature"
      ></img>
      <p className="text-xl">Jayden Chan</p>
      <div className="mb-64" />
    </div>
  );
};

export default CoverLetter;
