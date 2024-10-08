import { useState } from "react";

const App = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState("input");

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercent = Math.round((numPacked / numItems) * 100);

  let sortedItems;

  if (sortBy === "input") sortedItems = items;

  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));

  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

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

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) alert("Enter description !");

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };

    addItem(newItem);

    setDescription("");
    setQuantity(1);
  }

  return (
    <div className="app">
      {/* Header Component */}
      <h1>🏝️ FAR AWAY ✈️</h1>

      {/* Add item form Component */}
      <form className="add-form" onSubmit={handleSubmit}>
        <h3>What do you need for your trip? 😍</h3>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
          {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Item....."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <button>Add</button>
      </form>

      {/* List Component */}
      <div className="list">
        <ul>
          {sortedItems.map((el) => (
            <>
              <li>
                <input
                  type="checkbox"
                  value={el.packed}
                  onChange={() => updateItem(el.id)}
                />
                <span
                  style={el.packed ? { textDecoration: "line-through" } : {}}
                >
                  {el.quantity} {el.description}
                </span>
                <button onClick={() => deleteItem(el.id)}>❌</button>
              </li>
            </>
          ))}
        </ul>

        <div className="actions">
          <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="input">Sort by Input Order</option>
            <option value="description">Sort by Description</option>
            <option value="packed">Sort by Packed Status</option>
          </select>
          <button onClick={clearItems}>Clear List</button>
        </div>
      </div>

      {/* Stats Component */}
      <footer className="stats">
        {numPercent !== 100 ? (
          <span>
            👓 You have {numItems} items. You have packed {numPacked} items in
            your list. ({numPercent}%)
          </span>
        ) : (
          <span>Everything is packed. Let us goo !!!</span>
        )}
      </footer>
    </div>
  );
};

export default App;
