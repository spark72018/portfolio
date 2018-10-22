import React, { Component } from 'react';
import logo from './images/logo.png';
import selfLogo from './images/self-logo.jpg';
import HamburgerButton from './components/HamburgerButton';
import HamburgerMenu from './components/HamburgerMenu';
import Intro from './components/Intro';
import FeaturedWork from './components/FeaturedWork';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';
import { PROJECT_INFO_ARR, LINKEDIN_URL, GITHUB_URL } from './constants';
import './App.css';

class App extends Component {
  state = {
    hamburgerOpen: false,
    onWhiteBackground: false
  };

  skillsSectionRef = React.createRef();

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    this.state.scrollContainer.current.removeEventListener(
      'scroll',
      this.handleScroll
    );
  }

  setBodyOverflowTo = val => {
    document.body.style.overflow = val;
  };

  toggleHamburgerOpen = () =>
    this.setState({ hamburgerOpen: !this.state.hamburgerOpen });

  // made into async/await function because sometimes
  // toggleHamburgerOpen didn't finish by the time
  // this.setBodyOverflowTo ran
  toggleHamburgerAndBodyOverflow = async () => {
    await this.toggleHamburgerOpen();

    return this.state.hamburgerOpen
      ? this.setBodyOverflowTo('hidden')
      : this.setBodyOverflowTo('scroll');
  };

  handleHamburgerButtonClick = () => this.toggleHamburgerAndBodyOverflow();

  handleHamburgerMenuItemClick = () => this.toggleHamburgerAndBodyOverflow();

  setOnWhiteBackground = bool => this.setState({ onWhiteBackground: bool });

  handleScroll = async e => {
    const scrollTopVal = document.getElementsByTagName('html')[0].scrollTop;
    const skillsSectionPosition = this.skillsSectionRef.current.offsetTop;
    // console.log('scrollTopVal is', scrollTopVal);

    return scrollTopVal + 120 >= skillsSectionPosition
      ? this.setOnWhiteBackground(true)
      : this.setOnWhiteBackground(false);
  };

  render() {
    const { hamburgerOpen, onWhiteBackground } = this.state;
    return (
      <div id="scroll-container">
        <HamburgerMenu
          handleClick={this.handleHamburgerMenuItemClick}
          open={hamburgerOpen}
        />
        <HamburgerButton
          handleHamburgerButtonClick={this.handleHamburgerButtonClick}
          open={hamburgerOpen}
          onWhiteBackground={onWhiteBackground}
        />
        <Intro logoImgSrc={logo} />
        <FeaturedWork projectInfoArr={PROJECT_INFO_ARR} />
        <Skills skillsSectionRef={this.skillsSectionRef} />
        <About logoImgSrc={selfLogo} />
        <Footer linkedinLink={LINKEDIN_URL} githubLink={GITHUB_URL} />
      </div>
    );
  }
}

export default App;
