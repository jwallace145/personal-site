import { Link } from 'react-router-dom';
import React from 'react';
import { categories, skills } from '../data/resume/skills';
import certifications from '../data/resume/certifications';

import Courses from '../components/Resume/Courses';
import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Main from '../layouts/Main';
import References from '../components/Resume/References';
import Skills from '../components/Resume/Skills';
import courses from '../data/resume/courses';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';
import Certifications from '../components/Resume/Certification/Certification';

const sections = [
  'Experience',
  'Education',
  'Certifications',
  'Skills',
  'Courses',
  'References',
];

const Resume = () => (
  <Main
    title="Resume"
    description="Jimmy Wallace's Resume."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">Resume</Link></h2>
          <div className="link-container">
            {sections.map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>))}
          </div>
        </div>
      </header>
      <Experience data={positions} />
      <Education data={degrees} />
      <Certifications certificates={certifications} />
      <Skills skills={skills} categories={categories} />
      <Courses data={courses} />
      <References />

    </article>
  </Main>
);

export default Resume;
