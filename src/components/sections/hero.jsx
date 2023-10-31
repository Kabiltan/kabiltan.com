import React, { Component } from 'react';
import Icons from '../../icons/icons';
import LogoIcon from '../../icons/logo';
import IconScroll from '../../icons/scroll';
import Fade from 'react-reveal/Fade';

class Hero extends Component {
  state = {};
  render() {
    const duration = 1000;
    const delay = 100;

    return (
      <React.Fragment>
        <div className='hero'>
          <div className='hero-content'>
            <Fade duration={duration}>
            </Fade>
            <Fade duration={duration} delay={delay}>
              <h1 className='hero-text'>
                I'm <span className='name'>Kabiltan Kalaichelvan</span>, a
                Computer Engineering student at The University of Wisconsin-Madison.{' '}
              </h1>
            </Fade>
            <Fade duration={duration} delay={delay * 2}>
              <h2 className='hero-text'>
                Check out my{' '}
                <a
                  className='link-yellow'
                  href='/Kabiltan_s_Resume_New_Grad.pdf'
                  target='_blank'
                  rel='noopener noreferrer'>
                  resume
                </a>{' '}
                and let's connect:{' '}
                <a 
                className='link-red'
                href="mailto:kalaichelvan@wisc.edu">kalaichelvan@wisc.edu
                </a>
              </h2>
            </Fade>
            <Fade duration={duration} delay={delay * 3}>
              <Icons />
            </Fade>
          </div>
        </div>
        <Fade duration={duration} delay={delay * 4}>
          <IconScroll />
        </Fade>
      </React.Fragment>
    );
  }
}

export default Hero;
