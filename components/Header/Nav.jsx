export default () => (
  <nav>
    <ul>
      <li>
        <a>Why Etherpass</a>
      </li>
      <li>
        <a>How it works</a>
      </li>
      <li>
        <a>Team</a>
      </li>
      <li>
        <a>Roadmap</a>
      </li>
      <li>
        <button>Join token sale</button>
      </li>
    </ul>
    <style jsx>{`
      ul {
        display: flex;
        align-items: center;
        padding: 0;
        margin: 0;
        list-style-type: none;
      }
      ul li:not(:first-of-type) {
        margin-left: 1.5rem;
      }
      ul li:last-of-type {
        margin-left: 2rem;
      }
      a,
      button {
        display: flex;
        align-items: center;
        height: 60px;
      }
      button {
        color: #fff;
        background-color: #1452f5;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        padding: 0 1.5rem;
      }
    `}</style>
  </nav>
);
