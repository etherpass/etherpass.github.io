import theme from '../../theme';

export default ({children}) => (
  <div>
    {React.Children.map(children, (child, idx) =>
      React.cloneElement(child, {align: idx % 2 === 0 ? 'right' : 'left'})
    )}
    <style jsx>{`
      div {
        position: relative;
      }
      div::before {
        content: '';
        position: absolute;
        top: 0;
        left: calc(50% - 2px);
        height: 100%;
        width: 4px;
        background: ${theme.colors.primary};
        z-index: -1;
      }
    `}</style>
  </div>
);
