import Content from "./Content";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";

function App() {
  const API_URL = "http://localhost:4000/items";
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw Error("Did not receive expected data");
        }
        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchItems()
  }, []);
  return (
    <>
      <div className="App">
        <Header title="Groceries list" />
        <AddItem items={items} setItems={setItems} />
        <SearchItem search={search} setSearch={setSearch} />
        <main>
          {fetchError && (
            <p style={{ color: "red" }}>{`Error : ${fetchError}`}</p>
          )}
          {!fetchError && isLoading && <p>Loading...</p>}
          {!fetchError && !isLoading && (
            <Content
              items={items.filter((item) =>
                item.item.toLowerCase().includes(search.toLowerCase())
              )}
              setItems={setItems}
            />
          )}
        </main>
        <Footer length={items.length} />
      </div>
    </>
  );
}

export default App;
