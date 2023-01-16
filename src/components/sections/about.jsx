import React, { Component } from 'react';
import Section from './../section';

class About extends Component {
  state = {};
  render() {
    return (
      <Section title='about'>
        <p>
          I'm Kabiltan, an aspiring software engineer, looking to
          explore the intersection of machine learning and software
          engineering. I currently attend the{' '}
          <a
            className='link-red'
            target='_blank'
            rel='noopener noreferrer'>
            University of Wisconsin-Madison
          </a>
          , where I am a senior studying Computer Engineering. 
          During the summmer of 2022, I was a software engineer intern at{' '}
          <a
            className='link-red'
            target='_blank'
            rel='noopener noreferrer'>
            Traveler's Insurance 
          </a>
           {' '} where I developed a full-stack application
           that incorporated {' '}
           <a 
            className='link-blue'
            target='_blank'
            rel='noopener noreferrer'>
            natural langugage processing 
          </a>
          {' '}
          to 
           quantify employee sentiment.
        </p>{' '}
        <p>
          For the summer of 2023, I am very excited to work as a
          software engineer intern at{' '}
          <a
            className='link-yellow'
            target='_blank'
            rel='noopener noreferrer'>
            Amazon!
          </a>
        </p>{' '}
        <p>
          In my free time, when I'm not coding, I enjoy playing {' '}
          <a
            className='link-green'
            target='_blank'
            rel='noopener noreferrer'>
            tennis,
          </a> {' '} going to the {' '}
          <a
            className='link-red'
            target='_blank'
            rel='noopener noreferrer'>
            gym,
          </a>{' '} and {' '}
          <a
            className='link-yellow'
            target='_blank'
            rel='noopener noreferrer'>
            cooking.
          </a>
        </p>
      </Section>
    );
  }
}

export default About;
