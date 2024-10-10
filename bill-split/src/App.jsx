import { useState } from "react";

import FriendList from "./components/FriendList";
import FriendForm from "./components/FriendForm";
import SplitBillForm from "./components/SplitBillForm";

import { initialFriends } from "./data/friends";

const App = () => {
  const [friends, setFriends] = useState(initialFriends);

  const [toggleAddFriend, setToggleAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function toggleFriendMenu() {
    setToggleAddFriend(!toggleAddFriend);
  }

  function addFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setToggleAddFriend(false);
  }

  function selectFriend(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
  }

  function handleBillSplit(value) {
    setFriends((friends) =>
      friends.map((friend) =>
        selectedFriend.id === friend.id ? { ...friend, balance: value } : friend
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selectedFriend={selectedFriend}
          onSelectFriend={selectFriend}
        />

        {toggleAddFriend ? (
          <FriendForm
            onAddFriend={addFriend}
            onToggleFriendMenu={toggleFriendMenu}
          />
        ) : (
          <button className="button" onClick={toggleFriendMenu}>
            Add Friend
          </button>
        )}
      </div>

      {selectedFriend && (
        <SplitBillForm
          selectedFriend={selectedFriend}
          onBillSplit={handleBillSplit}
        />
      )}
    </div>
  );
};

export default App;
