import {Section, Flex, Card} from '../../atoms';

const team = [
  {
    name: `Roman Chuprikov`,
    bio: `5+ years of developing high-performant financial applications, Ethereum adopter since it’s raise.`,
    src: `https://placekitten.com/g/128/128`
  },
  {
    name: `Sergey Troshkin`,
    bio: `3+ years on working with the Blockchain, backend guru with more than 10 years experience.`,
    src: `https://placekitten.com/g/128/128`
  },
  {
    name: `Artyom Neustroev`,
    bio: `5+ years experience in Web development. Trying to make frontend developers happier bringing the brilliant devops solutions in the last 2 years.`,
    src: `https://placekitten.com/g/128/128`
  },
  {
    name: `Aleksandr Skakovskiy`,
    bio: `Web developer since 1x1 pixel gifs, 3+ years in product management.`,
    src: `https://placekitten.com/g/128/128`
  }
];

export default () => (
  <Section>
    <h2>Team</h2>
    <Flex>
      {/* <ul>
      {team.map(member => (
        <li>
          <Card title={member.name} src={member.src}>
            {member.bio}
          </Card>
        </li>
      ))}
    </ul> */}
      {team.map(member => (
        <Card title={member.name} src={member.src}>
          {member.bio}
        </Card>
      ))}
    </Flex>
    {/* <style jsx>
      {`
        ul {
          list-style-type: none;
          display: flex;
        }
        li {
          display: flex;
        }
      `}
    </style> */}
  </Section>
);
