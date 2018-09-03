export default ({title, src, children}) => (
  <div>
    {src && <div />}
    <h3>{title}</h3>
    <p>{children}</p>
    <style jsx>{`
      div {
        border-radius: 4px;
        box-shadow: 0px 1px 3px 0px rgba(31, 37, 51, 0.2),
          0px 1px 1px 0px rgba(31, 37, 51, 0.14),
          0px 2px 1px -1px rgba(31, 37, 51, 0.12);
        padding: 1rem;
        margin: 0 1rem;
        text-align: center;
        flex: 1 1 0;
      }
      div:first-child {
        margin-left: 0;
      }
      div:last-child {
        margin-right: 0;
      }
      div > div {
        background: url(${src});
        background-size: cover;
        background-position: center center;
        background-repeat: no-repeat;
        border-radius: 50%;
        height: 128px;
        width: 128px;
        margin: 0 auto 1rem;
      }
    `}</style>
  </div>
);
