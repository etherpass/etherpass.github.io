import React from 'react';
import {Flex, Text, Box, Card, Link} from 'rebass';
import Wrapper from './Wrapper';
import {Circle} from './Roadmap';
import {FaTelegram, FaGithub, FaTwitter} from 'react-icons/fa';

const Social = ({Icon, href}) => (
  <Circle mr={3}>
    <Link href={href}>
      <Icon size={32} />
    </Link>
  </Circle>
);

export default () => (
  <Box as="footer" bg="black" p={3}>
    <Wrapper>
      <Flex>
        <Box>
          <Text color="white">© {new Date().getFullYear()} Etherpass</Text>
        </Box>
        <Flex ml="auto">
          <Social href="https://t.me/etherpass_community" Icon={FaTelegram} />
          <Social href="https://github.com/etherpass" Icon={FaGithub} />
          <Social href="https://twitter.com/etherpass_app" Icon={FaTwitter} />
        </Flex>
      </Flex>
    </Wrapper>
  </Box>
);
