export default ({name, color, children}) => (
  <h2>
    <a name={name}>{children}</a>
    <style jsx>{`
      h2 {
        background: initial;
        color: ${color};
      }
      a:target::before {
        content: '';
        display: block;
        height: 120px;
        margin-top: -120px;
      }
    `}</style>
  </h2>
);
