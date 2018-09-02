import {Section} from '../../atoms';
import {FiActivity} from 'react-icons/fi';
import Timeline from './Timeline';
import TimelineItem from './TimelineItem';

export default () => (
  <Section>
    <h2>Roadmap</h2>
    <Timeline>
      <TimelineItem
        title="Pre-ICO"
        desc="foo bar"
        date="2017-2019"
        icon={<FiActivity color="white" />}
      />
      <TimelineItem
        title="Pre-ICO"
        desc="foo bar"
        date="2017-2019"
        icon={<FiActivity color="white" />}
      />
      <TimelineItem
        title="Pre-ICO"
        desc="foo bar"
        date="2017-2019"
        icon={<FiActivity color="white" />}
      />
      <TimelineItem
        title="Pre-ICO"
        desc="foo bar"
        date="2017-2019"
        icon={<FiActivity color="white" />}
      />
      <TimelineItem
        title="Pre-ICO"
        desc="foo bar"
        date="2017-2019"
        icon={<FiActivity color="white" />}
      />
    </Timeline>
  </Section>
);
