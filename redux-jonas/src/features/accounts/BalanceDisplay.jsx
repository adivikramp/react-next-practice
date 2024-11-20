import { useSelector } from "react-redux";

const BalanceDisplay = () => {
  const { balance } = useSelector((store) => store.account);

  return <div>Balance Amount: {balance}</div>;
};

export default BalanceDisplay;
