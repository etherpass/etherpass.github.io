import {Box, Card, Heading, Flex, Text, Image} from 'rebass';
import Wrapper from './Wrapper';
import SectionTitle from './SectionTitle';
import {colors} from '../theme';

const createFeature = (name, desc, image) => ({
  name,
  desc,
  image
});

const features = [
  createFeature(
    'Blockchain reliability',
    'Leverage the password security with the blockchain reliability, immutability and auto-synchronization.',
    '../static/undraw_server_status_5pbv.svg'
  ),
  createFeature(
    'End-to-end encryption',
    'Zero-knowledge proof with the end-2-end encryptions guarantees only you can access your data.',
    '../static/undraw_security_o890.svg'
  ),
  createFeature(
    'Fail-operational',
    'Etherpass services will be operational even in a case of total disaster meaning your never lost your data.',
    '../static/undraw_QA_engineers_dg5p.svg'
  )
];

const Pillar = ({title, content, image, ...props}) => (
  <Card
    boxShadow={['small', 'small', 'large', 'xl']}
    borderRadius={4}
    p={2}
    mb={[4, 0]}
    {...props}
  >
    <Box my={4} css={{textAlign: 'center'}}>
      <Image src={image} height={200} />
    </Box>
    <Heading
      as="h3"
      fontSize={3}
      mb={4}
      textAlign="center"
      css={{
        position: 'relative',
        '&:after': {
          content: "''",
          position: 'absolute',
          height: '1px',
          width: '20%',
          bottom: '-0.6em',
          right: 0,
          left: 0,
          margin: '0 auto',
          backgroundColor: colors.dark
        }
      }}
    >
      {title}
    </Heading>
    <Text px={3} pb={4} mb={[3, 0]} textAlign="justify">
      {content}
    </Text>
  </Card>
);

export default () => (
  <Wrapper>
    <SectionTitle href="why" mt={5} mb={4}>
      Why Etherpass
    </SectionTitle>
    <Heading
      textAlign="center"
      as="h4"
      color="#636e72"
      fontSize={20}
      fontWeight="200"
      my={4}
    >
      Etherpass is the perfect place for your most sensitive data.
    </Heading>
    <Flex justifyContent="space-between" flexWrap="wrap" px={3}>
      {features.map(({name, desc, image}) => (
        <Pillar
          key={name}
          title={name}
          content={desc}
          image={image}
          width={[1, 0.32]}
        />
      ))}
    </Flex>
  </Wrapper>
);
