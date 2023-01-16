import React, { Component } from 'react';
import Section from './../section';
import Card from './../card';

class Projects extends Component {
  state = {
    projects: [
      {
        title: 'Pathfinding Visualizer',
        detail:
          'Web application that allows users to visualize various path finding algorithms such as A-star and Dijkstra\'s',
        tags: ['ReactJS', 'HTML', 'CSS', 'Javascript'],
        color: 'blue',
        link:
          'https://kabiltan.github.io/Pathfinding-Visualizer/',
      },
      {
        title: 'Pong',
        detail:
          'Web application that allows users to play the iconic Pong video game, Options to play against another player or against the computer are available.',
        tags: ['Javascript', 'HTML', 'CSS'],
        color: 'red',
        link:
          'https://kabiltan.github.io/Pong.html',
      },
      {
        title: 'Spotify Playlist Creator',
        detail:
          'Web application that allows users to automatically create a Spotify playlist based on a word or sentence',
        tags: ['Python', 'Flask', 'Javascript', 'HTML', 'CSS'],
        color: 'green',
        link: 'http://kabiltan.pythonanywhere.com/',
      },
      {
        title: 'KASA Knights Tour Robot',
        detail:
          'Robot that completes the Knights Tour, starting from any square on the chess board',
        tags: ['SystemVerilog'],
        color: 'yellow',
        video: 'https://youtu.be/KRgpSK6mRTw',
      },
    ],
  };
  render() {
    return (
      <Section title='projects'>
        <div className='row'>
          {this.state.projects.map((project, index) => (
            <Card project={project} key={index} />
          ))}
        </div>
        <p id='see-more'>
          <a href='https://github.com/Kabiltan' target='_blank' className='link-blue'>
            Explore more on GitHub
          </a>
        </p>
      </Section>
    );
  }
}

export default Projects;
