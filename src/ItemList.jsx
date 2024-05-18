import { FaTrashAlt } from "react-icons/fa";
import apiRequest from "./apiRequest";

const ItemList = (props) => {
  let { items, setItems } = props;
  const API_URL = "http://localhost:4000/items";

  const handleCheck = async (id) => {
    const listItems = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItems);

    const updateItem = listItems.filter((item) => item.id === id);

    const putUrl = `${API_URL}/${id}`;
    const putOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        item: updateItem[0].item,
        checked: updateItem[0].checked,
      }),
    };
    const result = await apiRequest(putUrl, putOptions);
    result ? console.log(result) : "";
  };

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id !== id);
    console.log(id);
    setItems(listItems);
    const deleteUrl = `${API_URL}/${id}`;
    const deleteOptions = {
      method: "DELETE",
    };
    const result = await apiRequest(deleteUrl, deleteOptions);
    result ? console.log(result) : "";
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
