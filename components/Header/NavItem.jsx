import theme from '../../theme';

export default ({href, children}) => (
  <li>
    <a href={href}>{children}</a>
    <style jsx>{`
      li:not(:first-of-type) {
        margin-left: 1.5rem;
      }
      li:last-of-type {
        margin-left: 2rem;
      }
      a {
        color: ${theme.colors.text};
        display: flex;
        align-items: center;
        height: 60px;
        text-decoration: none;
      }
      li:last-child a {
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        padding: 0 1.5rem;
        font-weight: bold;
      }
    `}</style>
  </li>
);
