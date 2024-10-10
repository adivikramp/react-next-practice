import { useState } from "react";

/* eslint-disable react/prop-types */
const List = ({ items, onUpdateItem, onDeleteItem, onClearItem }) => {
  const [sortBy, setSortBy] = useState("input");

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

  return (
    <div className="list">
      <ul>
        {sortedItems.map((el) => (
          <>
            <li>
              <input
                type="checkbox"
                value={el.packed}
                onChange={() => onUpdateItem(el.id)}
              />
              <span style={el.packed ? { textDecoration: "line-through" } : {}}>
                {el.quantity} {el.description}
              </span>
              <button onClick={() => onDeleteItem(el.id)}>❌</button>
            </li>
          </>
        ))}
      </ul>

      {/* Actions Component */}
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by Input Order</option>
          <option value="description">Sort by Description</option>
          <option value="packed">Sort by Packed Status</option>
        </select>
        <button onClick={onClearItem}>Clear List</button>
      </div>
    </div>
  );
};

export default List;
