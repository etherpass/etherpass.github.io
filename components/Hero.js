import React from 'react';
import {Box, Flex, Heading, Image, Link, Text} from 'rebass';
import Wrapper from './Wrapper';
import GithubIcon from 'super-tiny-icons/images/svg/github.svg';
import TelegramIcon from 'super-tiny-icons/images/svg/telegram.svg';
import TwitterIcon from 'super-tiny-icons/images/svg/twitter.svg';
import {Check} from 'styled-icons/fa-solid/Check.cjs';
import {colors} from '../theme';
import {lighten} from 'polished';

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
    <Text as="i" color={colors.primary} mr={3} css={{verticalAlign: 'top'}}>
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
          The most trusted password vault
        </Heading>
        <Box mb={4}>
          <Heading
            as="h4"
            color="#636e72"
            fontSize={20}
            fontWeight="200"
            mb={4}
          >
            Safely store and secure your passwords, tokens and private keys in a
            fail-operational vault with zero-knowledge access.
          </Heading>
          {/* <List>
            <ListItem>Decentralized by default</ListItem>
            <ListItem>Zero-knowledge privacy</ListItem>
            <ListItem>Fail-operational by design</ListItem>
          </List> */}
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
