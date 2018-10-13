import React from 'react';
import {Box, Flex, Heading, Image, Link, Text} from 'rebass';
import Wrapper from './Wrapper';
import GithubIcon from 'super-tiny-icons/images/svg/github.svg';
import TelegramIcon from 'super-tiny-icons/images/svg/telegram.svg';
import TwitterIcon from 'super-tiny-icons/images/svg/twitter.svg';
import {Check} from 'styled-icons/fa-solid/Check.cjs';

const List = props => (
  <Box
    m={0}
    p={0}
    css={{
      listStyleType: 'none'
    }}
    {...props}
  />
);

const ListItem = ({children, ...props}) => (
  <Box as="li" mr={3} mb={3} {...props}>
    <Text as="i" color="blue" mr={3} css={{verticalAlign: 'middle'}}>
      <Check size={22} />
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
  <Wrapper pt={90}>
    <Flex
      alignItems="center"
      justifyContent="center"
      flexWrap={['wrap', 'nowrap']}
      px={3}
      py={5}
    >
      <Box width={[1, 0.4]} mb={[5, 0]}>
        <Heading as="h1" color="black" fontSize={5} mb={4}>
          The most trusted password manager
        </Heading>
        <Box mb={4}>
          <List>
            <ListItem>Blockchain-powered password vault</ListItem>
            <ListItem>Trustless access to your data</ListItem>
            <ListItem>Synchronized at no cost</ListItem>
          </List>
        </Box>
        <Flex>
          <Social Icon={TelegramIcon} href="https://t.me/etherpass_community" />
          <Social Icon={GithubIcon} href="https://github.com/etherpass" />
          <Social Icon={TwitterIcon} href="https://twitter.com/etherpass_app" />
        </Flex>
      </Box>
      <Box width={[1, 0.6]}>
        <Image src="/static/mbp.svg" alt="etherpass" width={[1, 800]} />
      </Box>
    </Flex>
  </Wrapper>
);