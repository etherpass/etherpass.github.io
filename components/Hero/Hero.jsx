import React from 'react';
import {FiCheck} from 'react-icons/fi';
import {Section, List, Flex} from '../../atoms';

const CheckIcon = () => (
  <FiCheck
    color="#1452F5"
    size="24"
    style={{
      marginRight: '1rem'
    }}
  />
);

export default () => (
  <Section>
    <Flex align="center" justify="space-between">
      <div>
        <h1>
          The most trusted
          <br /> password manager
        </h1>
        <List>
          <List.Item>
            <CheckIcon />
            Decentralized highly-available vault
          </List.Item>
          <List.Item>
            <CheckIcon />
            Trustless access to your data
          </List.Item>
          <List.Item>
            <CheckIcon />
            Synchronized at no cost
          </List.Item>
        </List>
      </div>
      <div>
        <img src="https://wallet.coinbase.com/assets/images/hero/wallet-image.png" />
      </div>
    </Flex>
    <style jsx>
      {`
        div {
          width: 50%;
        }
        div:first-child {
          max-width: 30rem;
        }
        div > img {
          max-width: 100%;
        }
      `}
    </style>
  </Section>
);
