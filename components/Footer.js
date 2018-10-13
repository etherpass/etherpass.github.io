import React from 'react';
import {Flex, Text, Box, Link} from 'rebass';
import Wrapper from './Wrapper';
import {Circle} from './Roadmap';
import {TelegramPlane as Telegram} from 'styled-icons/fa-brands/TelegramPlane.cjs';
import {Github} from 'styled-icons/fa-brands/Github.cjs';
import {Twitter} from 'styled-icons/fa-brands/Twitter.cjs';

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
          <Social href="https://t.me/etherpass_community" Icon={Telegram} />
          <Social href="https://github.com/etherpass" Icon={Github} />
          <Social href="https://twitter.com/etherpass_app" Icon={Twitter} />
        </Flex>
      </Flex>
    </Wrapper>
  </Box>
);
