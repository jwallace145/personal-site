import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>

      <header>
        <h2>Jimmy Wallace</h2>
        <p><a href="mailto:jimmy.wallace145@gmail.com">jimmy.wallace145@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Jimmy</p>
      <p>
        Im an avid learner with a special affinity for mathematics, computers, and music.
        I graduated from <a href="https://cse.osu.edu/">The Ohio State University</a> in
        May of 2020 with a CS degree and started my career as a software engineer shortly
        afterwards. Currently, I am employed by <a href="https://aws.amazon.com">Amazon Web Services </a>
        as a software development engineer 🚀
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
