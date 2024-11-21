import { pizzaData } from "./data";
import "./App.css";

export default function App() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  return (
    <div className="container">
      {/* Header Comp */}
      <div className="header">
        <h1>FAST REACT PIZZA CO</h1>
      </div>

      {/* Menu Comp */}
      <div className="menu">
        <h2>OUR MENU</h2>
        <p>
          Authentic Italian Cuisine. 6 Creative dishes to chose from. All from
          our store oven, all organic, all delicious.
        </p>
      </div>

      {/* Pizza Comp */}
      <div className="pizzas">
        {pizzaData.map((el, index) => (
          <>
            <div
              className={`pizza ${el.soldOut ? "sold-out" : ""}`}
              key={index}
            >
              <img src={el.photoName} />
              <div>
                <h3>{el.name}</h3>
                <p>{el.ingredients}</p>
                <span>{el.soldOut ? "SOLD OUT" : el.price}</span>
              </div>
            </div>
          </>
        ))}
      </div>

      {/* Footer Comp */}
      <div className="footer">
        <div className="order">
          {isOpen
            ? "Welcome to our store. :)"
            : `We are open from ${openHour} to ${closeHour}. Come visit us or order online.`}
        </div>
      </div>
      <button className="btn">Order</button>
    </div>
  );
}
