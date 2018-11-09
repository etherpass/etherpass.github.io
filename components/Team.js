import Wrapper from './Wrapper';
import {Card, Image, Text, Flex, Box, Link} from 'rebass';
import SectionTitle from './SectionTitle';
import {Github} from 'styled-icons/fa-brands/Github.cjs';
import {Twitter} from 'styled-icons/fa-brands/Twitter.cjs';

const team = [
  {
    name: `Roman Chuprikov`,
    bio: `5+ years of developing high-performant financial applications, Ethereum adopter since it’s raise.`,
    src: `https://github.com/paradise`,
    role: 'Blockhain developer'
  },
  {
    name: `Sergey Troshkin`,
    bio: `3+ years on working with the Blockchain, backend professional with more than 10 years experience.`,
    src: `https://github.com/troshkin`,
    role: 'Blockhain developer'
  },
  {
    name: `Artyom Neustroev`,
    bio: `5+ years experience in Web development. Trying to make frontend developers happier bringing the brilliant devops solutions in the last 2 years.`,
    src: `https://github.com/neustroev`,
    role: 'Frontend developer'
  },
  {
    name: `Aleksandr Skakovskiy`,
    bio: `3+ years in product management. Passionate about great user experience mixed with the cutting-edge technologies.`,
    src: `https://github.com/optimusway`,
    role: 'Product owner'
  }
];

const Member = ({name, bio, src, role, ...props}) => (
  <Card
    boxShadow={['medium']}
    borderRadius={4}
    p={3}
    css={{textAlign: 'center'}}
    {...props}
  >
    <Image src={`${src}.png?s=150`} borderRadius={9999} width={150} />
    <Text fontWeight="bold" fontSize={20} textAlign="center" mt={3}>
      {name}
    </Text>
    <Text fontWeight="bold" mt={2} mb={3}>
      {role}
    </Text>
    <Text>{bio}</Text>
    <Box css={{textAlign: 'left'}} />
  </Card>
);

export default () => (
  <Wrapper>
    <SectionTitle href="team" my={5}>
      Team
    </SectionTitle>
    <Flex justifyContent="space-between" flexWrap="wrap" p={3}>
      {team.map(member => (
        <Member
          key={member.name}
          {...member}
          width={[1, 300, 240]}
          mx="auto"
          mb={[4, null]}
        />
      ))}
    </Flex>
  </Wrapper>
);
