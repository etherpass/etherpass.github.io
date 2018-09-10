export default ({bg = 'initial', children, ...props}) => (
  <section {...props}>
    {children}
    <style jsx>{`
      section {
        background-color: ${bg};
        padding: 4rem 8rem;
      }
    `}</style>
  </section>
);
