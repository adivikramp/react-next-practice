import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Fruits", quantity: 10, packed: false },
  { id: 4, description: "Clothes", quantity: 6, packed: false },
  { id: 5, description: "Shoes", quantity: 2, packed: false },
];

const App = () => {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) alert("Enter description !");

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };

    initialItems.push(newItem);

    setDescription("");
    setQuantity(1);
    console.log(newItem);
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
          {initialItems.map((el) => (
            <>
              <li>
                {el.packed ? (
                  <input type="checkbox" checked />
                ) : (
                  <input type="checkbox" />
                )}
                <span>
                  {el.quantity} {el.description}
                </span>
                <button>❌</button>
              </li>
            </>
          ))}
        </ul>
      </div>

      {/* Stats Component */}
      <div className="stats">
        👓 You already have {initialItems.length} items in your list.
      </div>
    </div>
  );
};

export default App;
