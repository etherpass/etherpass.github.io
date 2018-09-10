import {Section, Flex, Card, NavHeader} from '../../atoms';
import theme from '../../theme';

const team = [
  {
    name: `Roman Chuprikov`,
    bio: `5+ years of developing high-performant financial applications, Ethereum adopter since it’s raise.`,
    src: `/static/kpWcb5rnpzk.jpg`
  },
  {
    name: `Sergey Troshkin`,
    bio: `3+ years on working with the Blockchain, backend professional with more than 10 years experience.`,
    src: `/static/H9iFD6BVe2I.jpg`
  },
  {
    name: `Artyom Neustroev`,
    bio: `5+ years experience in Web development. Trying to make frontend developers happier bringing the brilliant devops solutions in the last 2 years.`,
    src: `/static/c2aluKkeYGo.jpg`
  },
  {
    name: `Aleksandr Skakovskiy`,
    bio: `Web developer since 1x1 pixel gifs, 3+ years in product management.`,
    src: `/static/qLupXMcJPqg.jpg`
  }
];

export default () => (
  <Section bg={theme.colors.gray}>
    <NavHeader name="team">Team</NavHeader>
    <Flex>
      {team.map(member => (
        <Card title={member.name} src={member.src} bg={theme.colors.white}>
          {member.bio}
        </Card>
      ))}
    </Flex>
  </Section>
);
