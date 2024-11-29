import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cabins">Cabins</Link>
        </li>
        <li>
          <Link href="/account">Accounts</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
