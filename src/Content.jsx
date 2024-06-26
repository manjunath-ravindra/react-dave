import { FaTrashAlt } from "react-icons/fa";
import ItemList from "./ItemList";

const Content = (props) => {
  let { items, setItems } = props;

  return (
    <>
      {items.length ? (
        <ItemList items={items} setItems={setItems} />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty!</p>
      )}
    </>
  );
};

export default Content;
