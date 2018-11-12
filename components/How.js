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
    `Get the most recent release for your platform.`,
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

export default class How extends React.Component {
  state = {
    selectedIndex: 0
  };

  render() {
    return (
      <Box bg="lightgray" my={5} py={5}>
        <Wrapper>
          <SectionTitle href="how" mb={5}>
            How it works
          </SectionTitle>
          <Flex justifyContent="space-between" flexWrap="wrap" mb={4} px={3}>
            <Box width={[1, 1 / 2]}>
              {steps.map((step, idx) => (
                <Box
                  key={`step-${step.title.toLowerCase()}`}
                  mb={4}
                  p={3}
                  bg={idx === this.state.selectedIndex ? 'white' : ''}
                  css={{cursor: 'pointer', borderRadius: '4px'}}
                  onClick={() => {
                    this.setState({selectedIndex: idx});
                  }}
                >
                  <Heading as="h3" fontSize={3} my={2}>
                    {step.title}
                  </Heading>
                  <Text mb={[3, 0]}>{step.content}</Text>
                </Box>
              ))}
            </Box>
            <Image
              src={steps[this.state.selectedIndex].image}
              pl={[0, 5]}
              height={450}
              width={[1, 1 / 2]}
            />
          </Flex>
        </Wrapper>
      </Box>
    );
  }
}
