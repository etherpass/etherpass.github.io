import Link from 'next/link';
import {Flex, Heading, Box, Link as ReLink, Text} from 'rebass';
import {headingFont} from '../theme';
import {FiAlignJustify} from 'react-icons/fi';
import styled from 'styled-components';
import {cover} from 'polished';

const breakpoints = {
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px'
};

const device = {
  tablet: `(min-width: ${breakpoints.tablet})`,
  laptop: `(min-width: ${breakpoints.laptop})`,
  laptopL: `(min-width: ${breakpoints.laptopL})`
};

const NavMenu = styled(Flex)`
  display: none;
  @media ${device.tablet} {
    display: inherit;
  }
`;

const HamburgerIcon = styled(Box)`
  display: inherit;
  @media ${device.tablet} {
    display: none;
  }
`;

const HamburgerItem = props => (
  <Heading px={3} my={48} fontSize={5} {...props}>
    <ReLink
      color="black"
      py={5}
      href={props.href}
      css={{textDecoration: 'none'}}
    >
      {props.children}
    </ReLink>
  </Heading>
);

const Fit = styled(Box)`
  ${cover()};
  position: fixed;
  top: 50px;
  z-index: 98;
`;

class Hamburger extends React.Component {
  state = {
    show: false
  };

  handleToggle = () => {
    this.setState(({show}) => ({show: !show}));
  };

  handleHide = () => {
    this.setState({show: false});
  };

  render() {
    return (
      <>
        <HamburgerIcon>
          <FiAlignJustify size={32} onClick={this.handleToggle} />
          {this.state.show && (
            <Fit bg="white" onClick={this.handleHide}>
              <HamburgerItem href="#why">Why</HamburgerItem>
              <HamburgerItem href="#how">Features</HamburgerItem>
              <HamburgerItem href="#team">Team</HamburgerItem>
              <HamburgerItem href="#roadmap">Roadmap</HamburgerItem>
              <HamburgerItem href="#subscribe">Subscribe</HamburgerItem>
            </Fit>
          )}
        </HamburgerIcon>
      </>
    );
  }
}

const Logo = () => (
  <Link href="/">
    <Heading as="h1" color="black">
      <Text as="span" fontWeight="normal">
        ether
      </Text>
      <Text as="span">pass</Text>
    </Heading>
  </Link>
);

const NavItem = props => (
  <ReLink
    color="black"
    m={2}
    p={2}
    {...props}
    css={{
      ...props.css,
      fontFamily: headingFont,
      textDecoration: 'none'
    }}
  />
);

export default () => (
  <Flex
    alignItems="center"
    bg="white"
    px={3}
    py={2}
    css={{position: 'fixed', top: '0', left: 0, right: 0, zIndex: 99}}
  >
    <Logo />
    <Box mx="auto" />
    <NavMenu alignItems="center">
      <NavItem href="#why">Why Etherpass</NavItem>
      <NavItem href="#how">How it works</NavItem>
      <NavItem href="#team">Team</NavItem>
      <NavItem href="#roadmap">Roadmap</NavItem>
      <NavItem
        href="#subscribe"
        bg="blue"
        color="white"
        p={3}
        mr={0}
        css={{borderRadius: '4px', boxShadow: '0 8px 16px rgba(0,0,0,0.075)'}}
      >
        Join the waitlist
      </NavItem>
    </NavMenu>
    <Hamburger />
  </Flex>
);
