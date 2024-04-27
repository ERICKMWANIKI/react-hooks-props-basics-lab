import React from "react";
import {react, ReactPropTypes }from "react";
import Links from "./Links"
import PropTypes from 'prop-types';

function About({bio,github,linkedin}) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>Put the bio in here
      </p>

      {(bio?.trim().length> 0)?<p>{bio}</p>:null}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}
export default About;
