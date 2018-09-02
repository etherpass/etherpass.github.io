import Link from 'next/link';

export default () => (
  <Link href="/">
    <h1>
      ether
      <span>pass</span>
      <style jsx>{`
        h1 {
          font-family: 'Titillium Web', monospace;
          color: #1452f5;
          margin: 0;
        }
        span {
          background: #1452f5;
          color: white;
          display: inline-block;
          padding: 0 0.5rem;
          margin-left: 0.25rem;
        }
      `}</style>
    </h1>
  </Link>
);
