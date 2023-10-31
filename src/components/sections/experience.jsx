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
        title: 'Student Manager',
        start: 'November 2019',
        end: 'Present',
        city: 'Madison',
        state: 'WI',
        details: [
          'Provide over the phone, chat, and email support to faculty, students, and staff.',
          'Train newly hired employees.',
          'Answer questions from agents working on the floor and ensure operations run smoothly'
        ],
        color: 'red',
      },
      {
        company: 'Amazon',
        url: 'https://www.amazon.com/',
        title: 'Software Engineer Intern',
        start: 'May 2023',
        end: 'August 2023',
        city: 'Arlington',
        state: 'VA',
        details: [
          'Collaborated with Chase Bank to transition edit funding source and edit autopay to Amazon website',
          'Wrote and tested API calls to allow Amazon to communicate with Chase bank',
          'Improved current user interface to allow customers to seamlessly edit their funding source and edit autopay setups in 33% fewer button clicks'
        ],
        color: 'yellow',
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
      }
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
