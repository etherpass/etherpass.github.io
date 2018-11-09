import React, {Component} from 'react';
import Head from '../components/Head';
import Provider from '../components/Provider';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Subscribe from '../components/Subscribe';
import Features from '../components/Features';
import How from '../components/How';
import Team from '../components/Team';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';
import theme from '../theme';

class Home extends Component {
  componentDidMount() {
    window.analytics.identify();
    window.analytics.page();
  }

  render() {
    return (
      <Provider theme={theme}>
        <Head />
        <Nav />
        <Hero />
        <Subscribe
          title="Never miss an update"
          placeholder="Your email"
          value="Subscribe"
        />
        <Features />
        <How />
        <Team />
        <Roadmap />
        <Subscribe
          title="Join the waitlist"
          placeholder="Your email"
          value="Subscribe"
          href="subscribe"
        />
        <Footer />
      </Provider>
    );
  }
}

export default Home;
