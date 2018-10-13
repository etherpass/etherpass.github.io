import Wrapper from './Wrapper';
import {Heading, Box, Flex, Card, Text, Link} from 'rebass';
import {rem, triangle, rgba} from 'polished';
import {FiBookOpen, FiBox, FiCompass} from 'react-icons/fi';
import {FaCoins, FaServer, FaKey, FaWarehouse} from 'react-icons/fa';
import theme from '../theme';

const alignToDir = align => (align === 'right' ? 'row-reverse' : 'row');
const reverseAlign = align => (align === 'right' ? 'left' : 'right');

export const Circle = ({size = 32, css, ...props}) => (
  <Card
    borderRadius={9999}
    fontSize={3}
    {...props}
    css={{
      width: props.width || rem(size),
      height: rem(size),
      lineHeight: rem(size),
      textAlign: 'center',
      ...css
    }}
  />
);

const Timeline = props => (
  <Box
    {...props}
    css={{
      position: 'relative',
      '&::before': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 'calc(50% - 2px)',
        height: '100%',
        width: '4px',
        background: theme.colors.blue,
        zIndex: 0
      }
    }}
  />
);

const TimelineItem = ({title, desc, date, icon, align = 'left'}) => (
  <Flex
    justifyContent="center"
    alignItems="center"
    flexDirection={['row-reverse', alignToDir(align)]}
    px={3}
    my={4}
  >
    <Card
      bg="white"
      borderRadius={4}
      boxShadow={['small']}
      p={3}
      width={[2 / 3, 1 / 3]}
      css={{
        position: 'relative',
        zIndex: 2,
        '&::after': {
          content: "''",
          position: 'absolute',
          [reverseAlign(align)]: '-16px',
          top: 'calc(50% - 8px)',
          ...triangle({
            pointingDirection: reverseAlign(align),
            width: 16,
            height: 16,
            foregroundColor: rgba(0, 0, 0, 0.125)
          })
        }
      }}
    >
      <Text fontWeight="bold" mb={2}>
        {title}
      </Text>
      <Text>{desc}</Text>
    </Card>
    <Circle
      bg="blue"
      color="white"
      size={64}
      m={[0, 4]}
      pt={2}
      css={{zIndex: 1}}
      width={[0, 64]}
    >
      {icon}
    </Circle>
    <Box width={[1 / 3]}>
      <Text fontWeight="bold" textAlign={['left', align]}>
        {date}
      </Text>
    </Box>
  </Flex>
);

export default () => (
  <Box bg="lightgray" py={5}>
    <Wrapper>
      <Heading as="h2" textAlign="center" fontSize={4} mb={5}>
        <Link name="roadmap" />
        Roadmap
      </Heading>
      <Timeline>
        <TimelineItem
          title="Whitepaper"
          desc="Prepare technical documentation."
          date="Q4 2018"
          icon={<FiBookOpen size={32} />}
        />
        <TimelineItem
          title="Testnet launch"
          desc="Alpha version of smart contracts. Initial launch on the blockchain testnet."
          date="Q1 2019"
          icon={<FaServer size={32} />}
          align="right"
        />
        <TimelineItem
          title="ICO"
          desc="Company registration, legal activities."
          date="Q2 2019"
          icon={<FaCoins size={32} />}
        />
        <TimelineItem
          title="MVP"
          desc="Contracts + desktop client."
          date="Q3 2019"
          icon={<FiBox size={32} />}
          align="right"
        />
        <TimelineItem
          title="Full-fledged apps ecosystem"
          desc="Browser extensions, mobile apps."
          date="Q4 2019"
          icon={<FiCompass size={32} />}
        />
        <TimelineItem
          title="PKDI"
          desc="Private key distribution infrastructure."
          date="Q1 2020"
          icon={<FaKey size={32} />}
          align="right"
        />
        <TimelineItem
          title="Passchain"
          desc="Opinionated secure storage powered by Distributed Ledger Technology (DLT)."
          date="Q1 2021"
          icon={<FaWarehouse size={32} />}
        />
      </Timeline>
    </Wrapper>
  </Box>
);
