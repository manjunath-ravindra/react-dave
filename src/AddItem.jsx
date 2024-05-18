import { FaPlus } from "react-icons/fa";
import { useState, useRef } from "react";

const AddItem = (props) => {
  let { items, setItems } = props;
  const [newItem, setNewItem] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  const addItem = (item) => {
    const newId = items.length ? items.length + 1 : 1;
    const addedItem = { id: newId, checked: false, item: item };
    const newList = [...items, addedItem];
    setItems(newList);
    localStorage.setItem("shoppingItems", JSON.stringify(newList));
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
        onClick={()=>inputRef.current.focus()}>
        <FaPlus />
      </button>
    </form>
  );
};
export default AddItem;
