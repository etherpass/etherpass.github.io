import React from 'react';
import {Section, Flex, Circle, NavHeader} from '../../atoms';
import {FiDatabase, FiEyeOff, FiShare} from 'react-icons/fi';
import theme from '../../theme';

const Features = () => (
  <Section bg={theme.colors.gray}>
    <NavHeader name="why">Reinvent the way password managers work</NavHeader>
    <Flex align="top" justify="space-between">
      <div>
        <Circle bg={theme.colors.primary}>
          <FiDatabase color={theme.colors.white} size={48} />
        </Circle>
        <h3>Reliable and immutable storage</h3>
        <p>
          The nature of blockchain implies that blocks are immutable at a given
          moment in time, meaning you can retrieve your password from any point
          in past
        </p>
      </div>
      <div>
        <Circle bg={theme.colors.primary}>
          <FiEyeOff color={theme.colors.white} size={48} />
        </Circle>
        <h3>Protected by end-2-end encryption</h3>
        <p>
          Any read/write operations are protected by your own private key
          encryption
        </p>
      </div>
      <div>
        <Circle bg={theme.colors.primary}>
          <FiShare color={theme.colors.white} size={48} />
        </Circle>
        <h3>Synchronized by default</h3>
        <p>
          Since the blockchain is fully distributed all your data is
          auto-replicated and auto-synchronized across all your machines
        </p>
      </div>
    </Flex>
    <style jsx>{`
      div {
        max-width: 30%;
        text-align: center;
      }
      h3 {
        margin: 3rem 0 1rem;
        text-align: center;
      }
    `}</style>
  </Section>
);

export default Features;
