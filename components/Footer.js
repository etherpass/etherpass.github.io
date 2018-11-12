import React from 'react';
import {Flex, Text, Box, Link} from 'rebass';
import Wrapper from './Wrapper';
import {TelegramPlane as Telegram} from 'styled-icons/fa-brands/TelegramPlane.cjs';
import {Github} from 'styled-icons/fa-brands/Github.cjs';
import {Twitter} from 'styled-icons/fa-brands/Twitter.cjs';
import {colors} from '../theme';
import {Envelope as Mail} from 'styled-icons/fa-regular/Envelope.cjs';

export const Social = ({Icon, ...props}) => (
  <Box mr={3}>
    <Link color={colors.primary} {...props}>
      <Icon size={32} />
    </Link>
  </Box>
);

export default () => (
  <Box as="footer" bg="black" p={3}>
    <Wrapper>
      <Flex>
        <Box>
          <Text color="white">© {new Date().getFullYear()} Etherpass</Text>
        </Box>
        <Flex ml="auto">
          <Social href="mailto:etherpass@protonmail.com" Icon={Mail} />
          <Social
            href="https://t.me/etherpass"
            target="_blank"
            rel="noopener"
            Icon={Telegram}
          />
          <Social
            href="https://github.com/etherpass"
            target="_blank"
            rel="noopener"
            Icon={Github}
          />
          <Social
            href="https://twitter.com/etherpass_app"
            target="_blank"
            rel="noopener"
            Icon={Twitter}
          />
        </Flex>
      </Flex>
    </Wrapper>
  </Box>
);
