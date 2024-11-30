import Logo from "./_components/Logo";
import Navbar from "./_components/Navbar";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "The Wild Oasis | %s",
    default: "Welcome to the Wild Oasis",
  },
  description: "Best Hotel Booking Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-100 min-h-screen`}
      >
        <header>
          <Logo />
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>Copyright by Wild Oasis</footer>
      </body>
    </html>
  );
}
