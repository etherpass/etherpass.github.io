import React from 'react';
import Head from '../components/Head';
import Provider from '../components/Provider';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import Subscribe from '../components/Subscribe';
import Features from '../components/Features';
import GetStarted from '../components/GetStarted';
import Team from '../components/Team';
import Roadmap from '../components/Roadmap';
import Footer from '../components/Footer';

const Home = () => (
  <Provider>
    <Head title="Etherpass – Most trusted password manager" />
    <Nav />
    <Hero />
    <Subscribe
      title="Never miss an update"
      placeholder="Your email"
      value="Subscribe"
    />
    <Features />
    <GetStarted />
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

export default Home;
