import { FaPlus } from "react-icons/fa";
import { useState, useRef } from "react";
import apiRequest from "./apiRequest";

const AddItem = (props) => {
  let { items, setItems } = props;
  const [newItem, setNewItem] = useState("");
  const inputRef = useRef();
  const API_URL = "http://localhost:4000/items";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const addItem = async (item) => {
    const idString = items.length
      ? parseInt(items[items.length - 1].id) + 1
      : 1;
    const newId = idString.toString();
    const addedItem = { id: newId, checked: false, item: item };
    const newList = [...items, addedItem];
    setItems(newList);
    const postUrl = API_URL;
    const postOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addedItem),
    };
    await apiRequest(postUrl, postOptions);
  };
  return (
    <form className="addForm" onSubmit={handleSubmit}>
      <label htmlFor="addItem">Add Item</label>
      <input
        type="text"
        id="addItem"
        ref={inputRef}
        placeholder="Add an Item"
        required
        autoFocus
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button
        type="submit"
        aria-label="Add Item"
        onClick={() => inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};
export default AddItem;
