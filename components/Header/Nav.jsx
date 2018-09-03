export default () => (
  <nav>
    <ul>
      <li>
        <a href="#why">Why Etherpass</a>
      </li>
      <li>
        <a href="#how">How it works</a>
      </li>
      <li>
        <a href="#team">Team</a>
      </li>
      <li>
        <a href="#roadmap">Roadmap</a>
      </li>
      <li>
        <a href="#ico">Join token sale</a>
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
      a {
        display: flex;
        align-items: center;
        height: 60px;
        text-decoration: none;
        color: #3d5066;
      }
      li:last-child a {
        color: #fff;
        background-color: #1452f5;
        border: none;
        border-radius: 4px;
        font-size: 1rem;
        padding: 0 1.5rem;
        font-weight: bold;
      }
    `}</style>
  </nav>
);
