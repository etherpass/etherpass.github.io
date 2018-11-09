import {Box, Heading, Flex, Button, Link} from 'rebass';
import styled from 'styled-components';
import {rem, border} from 'polished';
import theme from '../theme';
import SectionTitle from './SectionTitle';

const EmailInput = styled.input`
  ${border('1px', 'solid', theme.colors.gray)};
  border-radius: 4px;
  padding: ${rem(16)};
  outline: none;
`;

export class Form extends React.Component {
  state = {
    email: ''
  };

  handleChangeEmail = e => this.setState({email: e.target.value});

  render() {
    const {placeholder, value} = this.props;
    return (
      <Flex flexWrap="wrap">
        <EmailInput
          type="email"
          name="email"
          id="email"
          placeholder={placeholder}
          value={this.state.email}
          onChange={this.handleChangeEmail}
        />
        <Button
          ml={2}
          variant="primary"
          onClick={e => {
            e.preventDefault();
          }}
        >
          {value}
        </Button>
      </Flex>
    );
  }
}

export default ({title, href, ...formProps}) => (
  <Box bg="black" color="white" py={5}>
    <Flex
      alignItems="center"
      justifyContent="center"
      flexDirection={['column', 'row']}
    >
      <SectionTitle href={href} color="white" mr={3} mb={[4, 0]}>
        {title}
      </SectionTitle>
      <Form {...formProps} />
    </Flex>
  </Box>
);
