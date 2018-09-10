import {NavItem} from './';

export default () => (
  <nav>
    <ul>
      <NavItem href="#why">Why Etherpass</NavItem>
      <NavItem href="#how">How it works</NavItem>
      <NavItem href="#team">Team</NavItem>
      <NavItem href="#roadmap">Roadmap</NavItem>
      <NavItem href="#ico">Join token sale</NavItem>
    </ul>
    <style jsx>{`
      ul {
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style-type: none;
      }
    `}</style>
  </nav>
);
