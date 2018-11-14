import React from 'react';
import {Box, Flex, Heading, Image, Link, Text} from 'rebass';
import Wrapper from './Wrapper';
import GithubIcon from 'super-tiny-icons/images/svg/github.svg';
import TelegramIcon from 'super-tiny-icons/images/svg/telegram.svg';
import TwitterIcon from 'super-tiny-icons/images/svg/twitter.svg';
import {Check} from 'styled-icons/material/Check.cjs';
import {colors} from '../theme';

const List = props => (
  <Box
    as="ul"
    m={0}
    p={0}
    css={{
      listStyleType: 'none'
    }}
    {...props}
  />
);

const ListItem = ({children, ...props}) => (
  <Box as="li" mr={3} mb={2} {...props}>
    <Text as="i" color={colors.primary} mr={3} css={{verticalAlign: 'middle'}}>
      <Check size={20} />
    </Text>
    {children}
  </Box>
);

export const Social = ({Icon, href = '/', children}) => (
  <Box mr={3}>
    <Link href={href} target="_blank" rel="noopener">
      <Icon height={32} />
      {children}
    </Link>
  </Box>
);

export default () => (
  <Wrapper mt={90}>
    <Flex
      alignItems="center"
      justifyContent="center"
      flexWrap={['wrap', 'nowrap']}
      px={3}
      py={[3, 6]}
    >
      <Box width={[1, 0.4]} mb={[5, 0]}>
        <Heading as="h1" color="black" fontSize={5} mb={4}>
          The most trusted password manager
        </Heading>
        <Box mb={4}>
          {/* <Text color="#5C6F84" fontSize={20} mb={4}>
            Safely store and secure your passwords, tokens and private keys in a
            fail-operational vault with zero-knowledge access.
          </Text> */}
          <List>
            <ListItem>Decentralized by default</ListItem>
            <ListItem>Zero-knowledge privacy</ListItem>
            <ListItem>Fail-operational by design</ListItem>
          </List>
        </Box>
        <Flex>
          <Social Icon={TelegramIcon} href="https://t.me/etherpass" />
          <Social Icon={GithubIcon} href="https://github.com/etherpass" />
          <Social Icon={TwitterIcon} href="https://twitter.com/etherpass_app" />
        </Flex>
      </Box>
      <Box width={[1, 0.6]}>
        <Image
          src="/static/mbp-alt-opti.png"
          alt="etherpass"
          width={[1, 800]}
        />
      </Box>
    </Flex>
  </Wrapper>
);
