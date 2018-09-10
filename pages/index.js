import {Header} from '../components/Header';
import {Hero} from '../components/Hero';
import {Features} from '../components/Features';
import {Explore} from '../components/Explore';
import {Footer} from '../components/Footer';
import {Subscribe} from '../components/Subscribe';
import {Team} from '../components/Team';
import {Roadmap} from '../components/Roadmap';
import theme from '../theme';

export default () => (
  <div>
    <Header />
    <Hero />
    <Features />
    <Explore />
    <Team />
    <Roadmap />
    <Subscribe />
    <Footer />
    <style global jsx>{`
      @import url('https://fonts.googleapis.com/css?family=Lato:400,700|Titillium+Web');
      html {
        font-size: 100%;
        box-sizing: border-box;
        overflow-y: scroll;
        scroll-behavior: smooth;
        -webkit-overflow-scrolling: touch;
        -webkit-font-smoothing: antialiased;
      }
      body {
        background: ${theme.colors.white};
        font-family: 'Lato', sans-serif;
        font-weight: 400;
        font-size: 1.125rem;
        line-height: 2.125rem;
        color: ${theme.colors.text};
        padding: 0;
        margin: 0;
      }
      *,
      ::before,
      ::after {
        box-sizing: inherit;
      }
      h1,
      h2,
      h3 {
        font-family: 'Lato', sans-serif;
        color: ${theme.colors.secondary};
        margin: 0;
        padding: 0;
      }
      h1 {
        font-size: 2.5rem;
        line-height: 3rem;
        margin-bottom: 2rem;
      }
      h2 {
        font-size: 2rem;
        line-height: 2.5rem;
        margin-bottom: 3rem;
        text-align: center;
      }
      h3 {
        margin-bottom: 0.5rem;
      }
      p {
        margin: 0;
        padding: 0;
      }
    `}</style>
  </div>
);
