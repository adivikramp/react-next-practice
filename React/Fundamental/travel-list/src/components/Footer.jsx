/* eslint-disable react/prop-types */
const Footer = ({ items }) => {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const numPercent = Math.round((numPacked / numItems) * 100);

  return (
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
  );
};

export default Footer;
