import Wrapper from './Wrapper';
import {Card, Image, Text, Flex, Box, Link} from 'rebass';
import SectionTitle from './SectionTitle';
import {Github} from 'styled-icons/fa-brands/Github.cjs';
import {Twitter} from 'styled-icons/fa-brands/Twitter.cjs';

const team = [
  {
    name: `Roman Chuprikov`,
    bio: `5+ years of developing high-performant financial applications, Ethereum adopter since it’s raise.`,
    src: `https://github.com/paradise`
  },
  {
    name: `Sergey Troshkin`,
    bio: `3+ years on working with the Blockchain, backend professional with more than 10 years experience.`,
    src: `https://github.com/troshkin`
  },
  {
    name: `Artyom Neustroev`,
    bio: `5+ years experience in Web development. Trying to make frontend developers happier bringing the brilliant devops solutions in the last 2 years.`,
    src: `https://github.com/neustroev`
  },
  {
    name: `Aleksandr Skakovskiy`,
    bio: `Web developer since 1x1 pixel gifs, 3+ years in product management.`,
    src: `https://github.com/optimusway`
  }
];

const Member = ({name, bio, src, ...props}) => (
  <Card
    boxShadow={['medium']}
    borderRadius={4}
    p={3}
    css={{textAlign: 'center'}}
    {...props}
  >
    <Image src={`${src}.png?s=150`} borderRadius={9999} width={150} />
    <Text fontWeight="bold" fontSize={20} textAlign="center" my={3}>
      {name}
    </Text>
    <Box my={3}>
      <Link href={src} color="gray" mr={3}>
        <Github size={24} />
      </Link>
      <Link href={src} color="gray">
        <Twitter size={24} />
      </Link>
    </Box>
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
