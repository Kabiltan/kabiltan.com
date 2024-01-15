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
          'Providing exceptional customer support through phone calls, email, and chat, having successfully resolved 2000+ calls and 1000+ emails and chats',
          'Actively contributing to the hiring processes by directly interviewing and training 100+ candidates/employees across 4 years',
          'Advising and guiding 80 current agents on how to resolve complex cases to ensure operations run smoothly',
          'Creating and maintaining 4000 easily accessible knowledge base documents to inform 40,000+ campus affiliates about university sponsored software'
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
          'Designed, tested, and implemented two API calls, using Spring, that facilitated seamless communication between Amazon and Chase Bank',
          'Optimized React.js/React Native user interface, reducing the number of clicks needed to edit funding sources and autopay setups by 33%',
          'Utilized Jest, JUnit, and Mockito to unit test implementation and achieve 95%+ line coverage for all code reviews'
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
          'Led a two-person team in the design and development of a full-stack application that leveraged React.js, Node.js , Node.js, Express.js, MongoDB and natural language processing (NLP) to quantify the emotions of 100+ interns',
          'Deployed full stack application to AWS using API Gateway, Lambda, DynamoDB, EC2, and S3',
          'Presented and demonstrated the application to two Senior Vice Presidents, showcasing its features and potential'
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
