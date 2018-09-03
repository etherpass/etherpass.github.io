import React from 'react';
import {FiCheck, FiGithub, FiSend, FiTwitter} from 'react-icons/fi';
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
        <div>
          <ul>
            <li>
              <a href="https://t.me/etherpass_community" target="_blank">
                <FiSend color="white" size={48} />
              </a>
            </li>
            <li>
              <a href="https://github.com/etherpass" target="_blank">
                <FiGithub color="white" size={48} />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/etherpass_app" target="_blank">
                <FiTwitter color="white" size={48} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <img src="/static/etherpass.png" alt="etherpass" />
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
        div:last-child {
          width: 80%;
        }
        div > img {
          max-width: 100%;
        }
        ul {
          display: flex;
          align-items: center;
          list-style-type: none;
          margin: 2rem 0 0;
          padding: 0;
        }
        ul > li {
          margin: 0;
          margin-right: 1rem;
        }
        li > a {
          display: flex;
          justify-content: center;
          align-items: center;
          color: white;
          background-color: #1f2533;
          border: none;
          border-radius: 50%;
          text-decoration: none;
          padding: 0.5rem 1rem;
          height: 60px;
          width: 60px;
        }
      `}
    </style>
  </Section>
);
