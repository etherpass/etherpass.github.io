import {Heading, Link} from 'rebass';
import {colors} from '../theme';

export default ({children, href, ...props}) => (
  <Heading as="h2" textAlign="center" fontSize={4} {...props}>
    {href && <Link name={href} />}
    {children}
  </Heading>
);
