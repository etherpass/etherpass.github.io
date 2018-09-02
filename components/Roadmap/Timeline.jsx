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
        background: red;
        content: '';
        position: absolute;
        top: 0;
        left: calc(50% - 2px);
        height: 100%;
        width: 4px;
        background: #1452f5;
        z-index: -1;
      }
    `}</style>
  </div>
);
