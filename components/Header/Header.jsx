import {Nav, Logo} from './';
import theme from '../../theme';

export default () => (
  <>
    <header>
      <div className="l">
        <Logo />
      </div>
      <div className="r">
        <Nav />
      </div>
    </header>
    <style jsx>{`
      header {
        font-size: 1rem;
        position: sticky;
        top: 0;
        width: 100%;
        max-width: 100%;
        background: ${theme.colors.white};
        z-index: 2;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.25rem 8.125rem 0.625rem;
      }
    `}</style>
  </>
);
