const List = ({children}) => (
  <ul>
    {children}
    <style jsx>{`
      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }
    `}</style>
  </ul>
);

List.Item = ({children}) => (
  <li>
    {children}
    <style jsx>{`
      li {
        display: flex;
        align-items: center;
      }
      li:not(:last-of-type) {
        margin-bottom: 0.25rem;
      }
    `}</style>
  </li>
);

const ListItem = List.Item;

export default List;
export {ListItem};
