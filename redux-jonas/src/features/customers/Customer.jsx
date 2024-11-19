import { useSelector } from "react-redux";

const Customer = () => {
  const customer = useSelector((store) => store.customer.fullName);

  return <h2>👋 Hello and Welcome, {customer}</h2>;
};

export default Customer;
