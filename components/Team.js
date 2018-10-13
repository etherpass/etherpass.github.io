import Wrapper from './Wrapper';
import {Heading, Card, Image, Text, Flex, Link} from 'rebass';

const team = [
  {
    name: `Roman Chuprikov`,
    bio: `5+ years of developing high-performant financial applications, Ethereum adopter since it’s raise.`,
    src: `https://github.com/paradise.png?s=150`
  },
  {
    name: `Sergey Troshkin`,
    bio: `3+ years on working with the Blockchain, backend professional with more than 10 years experience.`,
    src: `https://github.com/troshkin.png?s=150`
  },
  {
    name: `Artyom Neustroev`,
    bio: `5+ years experience in Web development. Trying to make frontend developers happier bringing the brilliant devops solutions in the last 2 years.`,
    src: `https://github.com/neustroev.png?s=150`
  },
  {
    name: `Aleksandr Skakovskiy`,
    bio: `Web developer since 1x1 pixel gifs, 3+ years in product management.`,
    src: `https://github.com/optimusway.png?s=150`
  }
];

const Member = ({name, bio, src, ...props}) => (
  <Card
    boxShadow={['small', 'small', 'large']}
    borderRadius={4}
    p={3}
    css={{textAlign: 'center'}}
    {...props}
  >
    <Image src={src} borderRadius={9999} width={150} />
    <Text fontWeight="bold" fontSize={20} textAlign="center" my={3}>
      {name}
    </Text>
    <Text>{bio}</Text>
  </Card>
);

export default () => (
  <Wrapper>
    <Heading as="h2" textAlign="center" fontSize={4} my={5}>
      <Link name="team" />
      Team
    </Heading>
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
