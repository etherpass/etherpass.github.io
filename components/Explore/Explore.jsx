import {Section, Flex, NavHeader} from '../../atoms';
import Block from './Block';
import blocks from './content';

export default () => (
  <Section>
    <NavHeader name="how">Get started in minutes</NavHeader>
    <Flex dir="column">
      {blocks.map((block, idx) => (
        <Block title={block.title} idx={++idx}>
          <p>{block.text}</p>
        </Block>
      ))}
    </Flex>
  </Section>
);
