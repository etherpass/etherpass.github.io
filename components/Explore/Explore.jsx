import {Section, Flex} from '../../atoms';
import Block from './Block';
import blocks from './content';

export default () => (
  <Section>
    <h2>Get started in minutes</h2>
    <Flex dir="column">
      {blocks.map((block, idx) => (
        <Block title={block.title} idx={++idx}>
          <p>{block.text}</p>
        </Block>
      ))}
    </Flex>
  </Section>
);
