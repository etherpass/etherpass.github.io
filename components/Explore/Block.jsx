import {Flex} from '../../atoms';
import theme from '../../theme';

export default ({title, idx, children}) => (
  <Flex align="center" mb="2rem">
    <div>{idx}</div>
    <div>
      <h3>{title}</h3>
      {children}
    </div>
    <style jsx>{`
      div:first-child {
        color: ${theme.colors.primary};
        font-size: 6rem;
        line-height: 8rem;
        opacity: 0.85;
        width: 20%;
      }
    `}</style>
  </Flex>
);
