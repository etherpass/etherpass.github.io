export default ({size = 8, bg, children}) => (
  <div>
    {children}
    <style jsx>{`
      div {
        border-radius: 50%;
        width: ${size}rem;
        height: ${size}rem;
        background: ${bg};
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
      }
    `}</style>
  </div>
);
