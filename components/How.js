import Wrapper from './Wrapper';
import {Box, Flex, Heading, Text, Image} from 'rebass';
import SectionTitle from './SectionTitle';

const createStep = (title, content, image) => ({
  title,
  content,
  image
});

const steps = [
  createStep(
    `Download and install the app`,
    `Get the most recent release for your platform on the website.`,
    '/static/undraw_setup_wizard_r6mr.svg'
  ),
  createStep(
    `Create your Etherpass vault`,
    `Easily create your secure vault. The only thing you need to remember is your master password.`,
    '/static/undraw_vault_9cmw.svg'
  ),
  createStep(
    `Get your secrets automatically on other device`,
    `Put your first password in the vault and see it automagically available on your other devices.`,
    '/static/undraw_cloud_sync_2aph.svg'
  )
];

const Step = ({title, content, image, dir}) => (
  <Flex alignItems="center" flexWrap="wrap" flexDirection={dir} mb={4} px={3}>
    <Box width={[1, 1 / 3]} mb={[3, 0]}>
      <Image src={image} />
    </Box>
    <Box width={[1, 2 / 3]} px={[2, 5]}>
      <Heading
        as="h3"
        color="black"
        fontSize={3}
        my={2}
        css={{display: 'inline-block'}}
      >
        {title}
      </Heading>
      <Text mb={[3, 0]}>{content}</Text>
    </Box>
  </Flex>
);

export default () => (
  <Box bg="lightgray" my={5} py={5}>
    <Wrapper>
      <SectionTitle href="how" mb={5}>
        How it works
      </SectionTitle>
      {steps.map(step => (
        <Step key={`step-${step.title}`} {...step} />
      ))}
    </Wrapper>
  </Box>
);
