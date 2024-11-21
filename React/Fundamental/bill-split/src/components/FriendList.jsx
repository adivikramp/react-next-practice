/* eslint-disable react/prop-types */
const FriendList = ({ friends, selectedFriend, onSelectFriend }) => {
  return (
    <ul>
      {friends.map((el) => (
        <>
          <li className={selectedFriend?.id === el.id ? "selected" : ""}>
            <img src={el.image} alt={el.image} />
            <h3>{el.name}</h3>
            <p
              className={el.balance > 0 ? "green" : el.balance < 0 ? "red" : ""}
            >
              {el.balance < 0
                ? `You owe ${el.name} ${Math.abs(el.balance)}$`
                : el.balance > 0
                ? `${el.name} owes you ${el.balance}$`
                : `You and ${el.name} are even!`}
            </p>
            <button className="button" onClick={() => onSelectFriend(el)}>
              {selectedFriend?.id === el.id ? "Close" : "Select"}
            </button>
          </li>
        </>
      ))}
    </ul>
  );
};

export default FriendList;
