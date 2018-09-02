import {Flex, Circle} from '../../atoms';

const alignToDir = align => (align === 'right' ? 'row-reverse' : 'row');

const reverseAlign = align => (align === 'right' ? 'left' : 'right');

export default ({title, desc, date, icon, align = 'left'}) => (
  <Flex justify="center" align="center" mb="1rem" dir={alignToDir(align)}>
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
    <div>
      <Circle size={4}>{icon}</Circle>
    </div>
    <div>{date}</div>
    <style jsx>{`
      div:first-child {
        border-radius: 4px;
        box-shadow: 0px 1px 3px 0px rgba(31, 37, 51, 0.2),
          0px 1px 1px 0px rgba(31, 37, 51, 0.14),
          0px 2px 1px -1px rgba(31, 37, 51, 0.12);
        padding: 1rem;
        flex-basis: 42.5%;
        position: relative;
      }
      div:first-child::after {
        width: 0;
        height: 0;
        border-${align}: 12px solid rgba(31, 37, 51, 0.12);
        border-top: 12px solid transparent;
        border-bottom: 12px solid transparent;
        content: '';
        position: absolute;
        ${reverseAlign(align)}: -12px;
        top: calc(50% - 12px);
      }
      div {
        margin-bottom: 4rem;
      }
      div:nth-child(2) {
        flex-basis: 15%;
      }
      div:last-child {
        flex-basis: 42.5%;
        text-align: ${align};
      }
    `}</style>
  </Flex>
);
