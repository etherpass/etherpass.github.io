import {NavHeader, Section} from '../../atoms';
import theme from '../../theme';

export default () => (
  <Section bg={theme.colors.secondary}>
    <NavHeader name="ico" color={theme.colors.white}>
      Join token sale
    </NavHeader>
    <form>
      <input type="email" placeholder="Email address" />
      <input type="submit" value="Get on the whitelist" />
    </form>
    <style jsx>
      {`
        form {
          display: flex;
          justify-content: center;
        }
        input {
          margin-right: 10px;
          padding: 16px;
          border-radius: 4px;
          border: medium none;
          font-size: 1.125rem;
        }
        input[type='email'] {
          width: 350px;
        }
        input[type='submit'] {
          color: #fff;
          background-color: ${theme.colors.primary};
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          padding: 0 1.5rem;
          font-weight: bold;
        }
      `}
    </style>
  </Section>
);
