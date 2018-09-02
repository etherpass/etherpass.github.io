export default ({
  align = 'normal',
  justify = 'normal',
  dir = 'row',
  mb = 0,
  children
}) => (
  <div>
    {children}
    <style jsx>{`
      div {
        display: flex;
        flex-direction: ${dir};
        align-items: ${align};
        justify-content: ${justify};
        width: 100%;
        margin-bottom: ${mb};
      }
      div:last-child {
        margin-bottom: 0;
      }
    `}</style>
  </div>
);
