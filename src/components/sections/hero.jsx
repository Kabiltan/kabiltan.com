import React, { Component } from 'react';
import Icons from '../../icons/icons';
import LogoIcon from '../../icons/logo';
import IconScroll from '../../icons/scroll';
import Fade from 'react-reveal/Fade';
import Particles, { initParticlesEngine } from "@tsparticles/react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      particlesVisible: true,
    };
  }

  componentDidMount() {
    this.initializeParticles();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  initializeParticles = async () => {
    await initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });

    this.setState({ particlesInitialized: true });
  };

  particlesLoaded = (container) => {
    console.log(container);
  };

  handleScroll = () => {
    const scrollPosition = window.scrollY;
    const particlesVisible = scrollPosition < window.innerHeight - 900;

    if (particlesVisible !== this.state.particlesVisible) {
      this.setState({ particlesVisible });
    }
  };

  particlesOptions = {
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "grab",
        },
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#ffffff",
      },
      links: {
        color: "#ffffff",
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 6,
        straight: false,
      },
      number: {
        density: {
          enable: true,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  }

  render() {
    const duration = 1000;
    const delay = 100;
    const { particlesInitialized, particlesVisible  } = this.state;

    return (
      <React.Fragment>
        {particlesInitialized && particlesVisible && (
          <Particles
            id="tsparticles"
            particlesLoaded={this.particlesLoaded}
            options={this.particlesOptions}
            className="particles-background"
          />
        )}
        <div className='hero'>
          <div className='hero-content'>
            <Fade duration={duration}>
            </Fade>
            <Fade duration={duration} delay={delay}>
              <h1 className='hero-text'>
                I'm <span className='name'>Kabiltan Kalaichelvan</span>, a
                Computer Engineering alumni from The University of Wisconsin-Madison.{' '}
              </h1>
            </Fade>
            <Fade duration={duration} delay={delay * 2}>
              <h2 className='hero-text'>
                Check out my{' '}
                <a
                  className='link-yellow'
                  href='/Kabiltan_s_Resume.pdf'
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
