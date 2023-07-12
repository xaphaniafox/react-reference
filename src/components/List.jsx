import Item from "./Item";

const List = (props) => {
  return (
    <ul>
      {props.list.map((user) => (
        <Item key={user.id} item={user} />
      ))}
    </ul>
  );
};

export default List;
