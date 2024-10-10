import { useState } from "react";

/* eslint-disable react/prop-types */
const SplitBillForm = ({ selectedFriend, onBillSplit }) => {
  const [bill, setBill] = useState("");
  const [userBill, setUserBill] = useState("");
  const [payer, setPayer] = useState("user");
  const friendBill = bill ? bill - userBill : "";

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !userBill) return;

    onBillSplit(payer === "user" ? friendBill : -userBill);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend.name}</h2>

      <label htmlFor="billValue">💰 Bill Value</label>
      <input
        type="number"
        id="billValue"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <label htmlFor="yourExpense">🤵 Your Expense</label>
      <input
        type="number"
        id="yourExpense"
        value={userBill}
        onChange={(e) =>
          setUserBill(
            Number(e.target.value) > bill ? userBill : Number(e.target.value)
          )
        }
      />

      <label htmlFor="otherExpense">🧑‍🤝‍🧑 Second Expense</label>
      <input type="number" id="otherExpense" disabled value={friendBill} />

      <label htmlFor="billPayer">🤑 Who is paying the bill?</label>
      <select value={payer} onChange={(e) => setPayer(e.target.value)}>
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>

      <button className="button">Split Bill</button>
    </form>
  );
};

export default SplitBillForm;
