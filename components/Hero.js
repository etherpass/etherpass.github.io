import React from 'react';
import {Box, Flex, Heading, Image, Link} from 'rebass';
import styled from 'styled-components';
import Wrapper from './Wrapper';
import {FiCheck} from 'react-icons/fi';
import {rem, margin} from 'polished';
import {IconContext} from 'react-icons';
import GithubIcon from 'super-tiny-icons/images/svg/github.svg';
import TelegramIcon from 'super-tiny-icons/images/svg/telegram.svg';
import TwitterIcon from 'super-tiny-icons/images/svg/twitter.svg';

const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  ${margin(0, 0, rem(8), 0)};
  vertical-align: middle;
  :last-of-type {
    ${margin(0)};
  }
`;

export const Social = ({Icon, href = '/', children}) => (
  <Box mr={3}>
    <Link href={href} target="_blank" rel="noopener">
      <Icon height={28} />
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
          <IconContext.Provider
            value={{
              size: 24,
              style: {marginRight: rem(16), verticalAlign: 'middle'}
            }}
          >
            <List>
              <ListItem>
                <FiCheck />
                Blockchain-powered password vault
              </ListItem>
              <ListItem>
                <FiCheck />
                Trustless access to your data
              </ListItem>
              <ListItem>
                <FiCheck />
                Synchronized at no cost
              </ListItem>
            </List>
          </IconContext.Provider>
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
