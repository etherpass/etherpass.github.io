import Wrapper from './Wrapper';
import {Box, Flex, Heading, Text, Link} from 'rebass';
import {Circle} from './Roadmap';
import theme from '../theme';

const createStep = (title, content) => ({
  title,
  content
});

const steps = [
  createStep(
    `Download and install the app`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
    cum sociis natoque penatibus et magnis. Habitant morbi tristique
    senectus et netus et malesuada.`
  ),
  createStep(
    `Create your Etherpass vault`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
  eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida
  cum sociis natoque penatibus et magnis. Habitant morbi tristique
  senectus et netus et malesuada.`
  ),
  createStep(
    `Get it automatically on other device`,
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Leo a diam
  sollicitudin tempor id eu nisl nunc. Ridiculus mus mauris vitae
  ultricies leo integer malesuada nunc vel.`
  )
];

const Step = ({title, content, num}) => (
  <Flex justifyContent="center" alignItems="top" mb={4} px={3}>
    <Box mr={4} mt={1}>
      <Circle
        size={48}
        bg="blue"
        color="white"
        css={{
          position: 'relative',
          zIndex: 1,
          '&::before': {
            content: "''",
            position: 'absolute',
            top: '100%',
            left: 'calc(50% - 1px)',
            height: num === 2 ? 0 : '150%',
            width: '2px',
            background: theme.colors.blue,
            zIndex: 0
          }
        }}
      >
        {++num}
      </Circle>
    </Box>
    <Box>
      <Heading as="h3" color="black" fontSize={3} mb={2}>
        {title}
      </Heading>
      <Text mb={[3, 0]}>{content}</Text>
    </Box>
  </Flex>
);

export default () => (
  <Box bg="lightgray" my={5} py={5}>
    <Wrapper>
      <Heading as="h2" color="black" fontSize={4} textAlign="center" mb={5}>
        <Link name="how" />
        Get started in minutes
      </Heading>
      {steps.map((step, idx) => (
        <Step key={step.title} num={idx} {...step} />
      ))}
    </Wrapper>
  </Box>
);
