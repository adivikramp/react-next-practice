/* eslint-disable react/prop-types */
import { useState } from "react";

const FriendForm = ({ onAddFriend, onToggleFriendMenu }) => {
  const [friendName, setFriendName] = useState("");
  const [imageURL, setImageURL] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!friendName || !imageURL) alert("Enter Friend Name !");

    const newFriend = {
      id: Date.now(),
      name: friendName,
      image: imageURL,
      balance: 0,
    };

    onAddFriend(newFriend);

    setFriendName("");
    setImageURL("");
  }

  return (
    <>
      <form className="form-add-friend" onSubmit={handleSubmit}>
        <label htmlFor="friendName">🧑‍🤝‍🧑 Name</label>
        <input
          type="text"
          id="friendName"
          value={friendName}
          onChange={(e) => setFriendName(e.target.value)}
        />

        <label htmlFor="friendImage">🖼️ Image URL</label>
        <input
          type="text"
          id="friendImage"
          value={imageURL}
          onChange={(e) => setImageURL(e.target.value)}
        />
        <button className="button">Add</button>
      </form>

      <button className="button" onClick={onToggleFriendMenu}>
        Close
      </button>
    </>
  );
};

export default FriendForm;
