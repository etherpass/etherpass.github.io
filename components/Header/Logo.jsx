import Link from 'next/link';
import theme from '../../theme';

export default () => (
  <Link href="/">
    <h1>
      ether
      <span>pass</span>
      <style jsx>{`
        h1 {
          font-family: 'Titillium Web', monospace;
          color: ${theme.colors.primary};
          margin: 0;
        }
        span {
          background: ${theme.colors.primary};
          color: ${theme.colors.white};
          display: inline-block;
          padding: 0 0.5rem;
          margin-left: 0.25rem;
        }
      `}</style>
    </h1>
  </Link>
);
