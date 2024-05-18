import { FaTrashAlt } from "react-icons/fa";

const ItemList = (props) => {
  let { items, setItems } = props;
  const handleCheck = (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);
    localStorage.setItem("shoppingItems", JSON.stringify(listItems));
  };
  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
    localStorage.setItem("shoppingItems", JSON.stringify(listItems));
  };
  return (
    <ul>
      {items.map((item) => {
        return (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheck(item.id)}
            />
            <label
              onDoubleClick={() => handleCheck(item.id)}
              style={
                item.checked
                  ? { textDecoration: "line-through" }
                  : { textDecoration: "none" }
              }>
              {item.item}
            </label>
            <FaTrashAlt
              onClick={() => handleDelete(item.id)}
              role="button"
              tabIndex="0"
            />
          </li>
        );
      })}
    </ul>
  );
};
export default ItemList;
