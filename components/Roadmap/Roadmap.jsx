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
        title="Whitepaper"
        desc="Prepare technical documentation."
        date="Q4 2018"
        icon={<FaCoins color="white" />}
      />
      <TimelineItem
        title="Testnet launch"
        desc="Alpha version of smart contracts. Initial launch on the blockchain testnet."
        date="Q1 2019"
        icon={<FaServer color="white" />}
      />
      <TimelineItem
        title="ICO"
        desc="Company registration, legal activities."
        date="Q2 2019"
        icon={<FaCoins color="white" />}
      />
      <TimelineItem
        title="MVP"
        desc="Contracts + desktop client."
        date="Q3 2019"
        icon={<FiActivity color="white" />}
      />
      <TimelineItem
        title="Full-fledged apps ecosystem"
        desc="Browser extensions, mobile apps."
        date="Q4 2019"
        icon={<FiActivity color="white" />}
      />
      <TimelineItem
        title="PKDI"
        desc="Private key distribution infrastructure."
        date="Q1 2020"
        icon={<FiActivity color="white" />}
      />
      <TimelineItem
        title="Passchain"
        desc="Opinionated secure storage powered by Distributed Ledger Technology (DLT)."
        date="Q1 2021"
        icon={<FiActivity color="white" />}
      />
    </Timeline>
  </Section>
);
