export default ({bg = 'initial', children}) => (
  <section>
    {children}
    <style jsx>{`
      section {
        background: ${bg};
        padding: 4rem 8rem;
      }
    `}</style>
  </section>
);
