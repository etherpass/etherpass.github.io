import {NavHeader, Section} from '../../atoms';

export default () => (
  <Section bg="#181818">
    <NavHeader name="ico" color="white">
      Join token sale
    </NavHeader>
    <form>
      <input type="email" placeholder="Email address" />
      <input type="submit" value="Get on the whitelist" />
    </form>
    <style jsx>
      {`
        h2 {
          color: white;
          font-size: 1.875rem;
          line-height: 2.5625rem;
          text-align: left;
          margin: 0;
          margin-bottom: 0.875rem;
        }
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
          background-color: #1452f5;
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
