import React, { Component } from 'react';
import Section from './../section';
import Role from './../role';

class Experience extends Component {
  state = {
    active: 0,
    experiences: [
      {
        company: 'UW-Madison DoIT Help Desk',
        url: 'https://it.wisc.edu/services/help-desk/',
        title: 'Technical Writer',
        start: 'November 2019',
        end: 'Present',
        city: 'Madison',
        state: 'WI',
        details: [
          'Provide over the phone, chat, and email support to faculty, students, and staff.',
          'Trained over 20 newly hired employees.',
          'Created web applications to provide Covid-19 information to 40,000 campus personnel.',
        ],
        color: 'red',
      },      
      {
        company: 'Travelers Insurance',
        url: 'https://www.travelers.com/',
        title: 'Software Engineer Intern',
        start: 'June 2022',
        end: 'August 2022',
        city: 'St. Paul',
        state: 'MN',
        details: [
          'Worked on a team to design and develop a full stack application that uses natural language processing to quantify the emotions of 100+ interns and 2000+ employees',
          'Deployed full stack application to AWS using services such as API Gateway, Lambda, DynamoDB, EC2, and S3.',
          'Demoed final application to a group of Senior Vice Presidents.'
        ],
        color: 'red',
      },
      {
        company: 'UW-Madison BadgerLoop',
        url: 'https://badgerloop.org/',
        title: 'Badgerloop Team Member',
        start: 'September 2019',
        end: 'May 2021',
        city: 'Madison',
        state: 'WI',
        details: [
          'Assisted in selecting a new retroflective sensor for slippage detection and velocity measurements on the driving wheel.',
          'Assisted in redesigning the telemetry retroflective sensor circuit.',
          'Assisted in population of printed circuit boards.'
        ],
        color: 'red',
      },
    ],
  };
  render() {
    const { experiences, active } = this.state;
    return (
      <Section title='experience'>
        <p className='monospace experience-nav'>
          {experiences.map((experience, index) => (
            <React.Fragment key={index}>
              <span
                className={
                  active === index
                    ? `link-${experience.color} experience.company `
                    : `link-text experience.company`
                }
                onClick={() => this.setState({ active: index })}>
                {experience.company}
              </span>
              {index < experiences.length - 1 && <span>&nbsp;/&nbsp;</span>}
            </React.Fragment>
          ))}
        </p>
        {experiences.map(
          (experience, index) =>
            active === index && <Role experience={experience} key={index} />
        )}
      </Section>
    );
  }
}

export default Experience;
