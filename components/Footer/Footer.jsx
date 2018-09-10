import {FiGithub, FiTwitter, FiSend} from 'react-icons/fi';
import theme from '../../theme';

export default () => (
  <footer>
    <div>
      <div>
        <span>© {new Date().getFullYear()} Etherpass</span>
      </div>
      <aside>
        <ul>
          <li>
            <a href="https://t.me/etherpass_community">
              <FiSend color={theme.colors.white} size={24} />
            </a>
          </li>
          <li>
            <a href="https://github.com/etherpass">
              <FiGithub color={theme.colors.white} size={24} />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/etherpass_app">
              <FiTwitter color={theme.colors.white} size={24} />
            </a>
          </li>
        </ul>
      </aside>
    </div>
    <style jsx>{`
      footer {
        color: ${theme.colors.white};
        background-color: ${theme.colors.secondary};
        padding: 1.5rem 8.125rem;
        font-size: 1rem;
      }
      footer > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      aside,
      ul {
        display: flex;
        align-items: center;
      }
      ul,
      ul > li {
        list-style-type: none;
        padding: 0;
      }
      li {
        margin: 0 1rem;
      }
    `}</style>
  </footer>
);
