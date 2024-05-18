import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const shoppingItems = localStorage.getItem("shoppingItems");
  const initialState = JSON.parse(shoppingItems);
  const [items, setItems] = useState(initialState || []);
  const [search, setSearch] = useState("");

  return (
    <>
      <div className="App">
        <Header title="Groceries list" />
        <AddItem items={items} setItems={setItems} />
        <SearchItem search={search} setSearch={setSearch} />
        <Content
          items={items.filter((item) =>
            item.item.toLowerCase().includes(search.toLowerCase())
          )}
          setItems={setItems}
        />
        <Footer length={items.length} />
      </div>
    </>
  );
}

export default App;
