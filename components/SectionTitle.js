import {Heading, Link} from 'rebass';

export default ({children, href, ...props}) => (
  <Heading as="h2" textAlign="center" fontSize={4} {...props}>
    {href && <Link name={href} />}
    {children}
  </Heading>
);
