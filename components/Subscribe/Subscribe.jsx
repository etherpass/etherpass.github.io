export default () => (
  <div>
    <h2>Join token sale</h2>
    <form>
      <input type="email" />
      <input type="submit" value="Get on the whitelist" />
    </form>
    <style jsx>
      {`
        div {
          background: #1452f5;
          padding: 4rem 8.125rem;
        }
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
          background-color: #fff;
          color: #1452f5;
          border: none;
          border-radius: 4px;
          font-size: 1rem;
          padding: 0 1.5rem;
          height: 60px;
          font-weight: 600;
        }
      `}
    </style>
  </div>
);
