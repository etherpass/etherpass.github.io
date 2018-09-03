import {Section, NavHeader} from '../../atoms';
import {FiActivity} from 'react-icons/fi';
import {FaCoins, FaServer} from 'react-icons/fa';
import Timeline from './Timeline';
import TimelineItem from './TimelineItem';

export default () => (
  <Section>
    <NavHeader name="roadmap">Roadmap</NavHeader>
    <Timeline>
      <TimelineItem
        title="Pre-ICO"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc."
        date="Q4 2018"
        icon={<FaCoins color="white" />}
      />
      <TimelineItem
        title="Testnet Launch"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc."
        date="Q1 2019"
        icon={<FaServer color="white" />}
      />
      <TimelineItem
        title="Pre-ICO"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc."
        date="2017-2019"
        icon={<FiActivity color="white" />}
      />
      <TimelineItem
        title="Pre-ICO"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc."
        date="2017-2019"
        icon={<FiActivity color="white" />}
      />
      <TimelineItem
        title="Pre-ICO"
        desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Leo a diam sollicitudin tempor id eu nisl nunc."
        date="2017-2019"
        icon={<FiActivity color="white" />}
      />
    </Timeline>
  </Section>
);
