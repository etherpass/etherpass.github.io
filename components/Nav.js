import Link from 'next/link';
import {Flex, Heading, Box, Link as ReLink, Text, Button} from 'rebass';
import {fonts, colors} from '../theme';
import {AlignJustify} from 'styled-icons/fa-solid/AlignJustify.cjs';
import styled from 'styled-components';
import {cover} from 'polished';
import Wrapper from './Wrapper';

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
          <AlignJustify size={32} onClick={this.handleToggle} />
          {this.state.show && (
            <Fit bg="white" onClick={this.handleHide}>
              <HamburgerItem href="#why">Why</HamburgerItem>
              <HamburgerItem href="#how">How it works</HamburgerItem>
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
      fontFamily: fonts.headingFont,
      textDecoration: 'none'
    }}
  />
);

export default () => (
  <Box
    bg="white"
    css={{
      position: 'fixed',
      top: '0',
      left: 0,
      right: 0,
      zIndex: 99
    }}
  >
    <Wrapper>
      <Flex alignItems="center" px={3} py={2}>
        <Logo />
        <Box mx="auto" />
        <NavMenu alignItems="center">
          <NavItem href="#why">Why Etherpass</NavItem>
          <NavItem href="#how">How it works</NavItem>
          <NavItem href="#team">Team</NavItem>
          <NavItem href="#roadmap">Roadmap</NavItem>
          <NavItem href="#subscribe" mr={0} pr={0}>
            <Button variant="primary" css={{height: '52px'}}>
              Join the waitlist
            </Button>
          </NavItem>
        </NavMenu>
        <Hamburger />
      </Flex>
    </Wrapper>
  </Box>
);
