import {Box, Heading, Flex, Button, Link} from 'rebass';
import styled from 'styled-components';
import {rem, border} from 'polished';
import theme from '../theme';

const EmailInput = styled.input`
  ${border('1px', 'solid', theme.colors.gray)};
  border-radius: 4px;
  padding: ${rem(16)};
  outline: none;
  /* min-width: 150px; */
`;

export const Form = ({placeholder, value}) => (
  <Flex as="form" flexWrap="wrap">
    <EmailInput
      type="email"
      name="email"
      id="email"
      placeholder={placeholder}
    />
    <Button ml={2} variant="primary">
      {value}
    </Button>
  </Flex>
);

export default ({title, href, ...formProps}) => (
  <Box bg="black" color="white" py={5}>
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection={['column', 'row']}
    >
      <Heading as="h2" color="white" mr={3} mb={[4, 0]} textAlign="center">
        {href && <Link name={href} />}
        {title}
      </Heading>
      <Form {...formProps} />
    </Flex>
  </Box>
);
