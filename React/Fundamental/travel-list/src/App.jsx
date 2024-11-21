import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import List from "./components/List";
import Form from "./components/Form";

const App = () => {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems((items) => [...items, item]);
  }

  function updateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function clearItems() {
    const confirmed = window.confirm(
      "Are you sure that you want to delete all your items?"
    );

    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      {/* Header Component */}
      <Header />

      {/* Add item form Component */}
      <Form onAddItem={addItem} />

      {/* List Component */}
      <List
        items={items}
        onUpdateItem={updateItem}
        onDeleteItem={deleteItem}
        onClearItem={clearItems}
      />

      {/* Stats Component */}
      <Footer items={items} setItems={setItems} />
    </div>
  );
};

export default App;
