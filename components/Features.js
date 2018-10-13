import {Box, Card, Heading, Flex, Text, Link} from 'rebass';
import Wrapper from './Wrapper';
import {FiDatabase, FiEyeOff, FiShare} from 'react-icons/fi';

const createFeature = (name, desc, icon) => ({
  name,
  desc,
  icon
});

const features = [
  createFeature(
    'Blockchain reliability',
    'The nature of blockchain implies that blocks are immutable at a given moment in time, meaning you can retrieve your password from any point in past',
    FiDatabase
  ),
  createFeature(
    'End-to-end encryption',
    'The nature of blockchain implies that blocks are immutable at a given moment in time, meaning you can retrieve your password from any point in past',
    FiShare
  ),
  createFeature(
    'Disaster recovery ready',
    'The nature of blockchain implies that blocks are immutable at a given moment in time, meaning you can retrieve your password from any point in past',
    FiEyeOff
  )
];

const Pillar = ({title, content, Icon, ...props}) => (
  <Card
    boxShadow={['small', 'small', 'large']}
    borderRadius={4}
    p={2}
    mb={[4, 0]}
    {...props}
  >
    <Box my={4} css={{textAlign: 'center'}}>
      <Icon size={48} />
    </Box>
    <Heading as="h3" fontSize={3} mb={4} textAlign="center">
      {title}
    </Heading>
    <Text px={3} pb={4} mb={[3, 0]} textAlign="justify">
      {content}
    </Text>
  </Card>
);

export default () => (
  <Wrapper>
    <Heading as="h2" fontSize={4} textAlign="center" mt={5} mb={4}>
      <Link name="why" />
      Why Etherpass
    </Heading>
    <Text color="text" fontSize={3} textAlign="center" mb={5}>
      Leverage the password security with the blockchain
    </Text>
    <Flex justifyContent="space-between" flexWrap="wrap" px={3}>
      {features.map(({name, desc, icon}) => (
        <Pillar
          key={name}
          title={name}
          content={desc}
          Icon={icon}
          width={[1, 0.32]}
        />
      ))}
    </Flex>
  </Wrapper>
);
