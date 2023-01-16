import React, { Component } from 'react';
import {
  IconGitHub,
  IconInstagram,
  IconLinkedIn,
} from './../icons';

const socialMedia = [
  {
    name: 'GitHub',
    url: 'https://github.com/Kabiltan',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/kabiltan/',
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/cobb1246',
  }
];

class Icons extends Component {
  render() {
    return (
      <div>
        {socialMedia.map(({ url, name }, i) => (
          <a
            key={i}
            href={url}
            target='_blank'
            rel='noopener noreferrer'
            className='icon-hero'>
            {this.getIcon(name)}
          </a>
        ))}
      </div>
    );
  }

  getIcon(name) {
    switch (name) {
      case 'GitHub':
        return <IconGitHub />;
      case 'Instagram':
        return <IconInstagram />;
      case 'LinkedIn':
        return <IconLinkedIn />;
      default:
    }
  }
}

export default Icons;
