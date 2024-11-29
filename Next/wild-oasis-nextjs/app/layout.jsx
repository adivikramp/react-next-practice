import Logo from "./components/Logo";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Wild Oasis Nextjs App",
  description: "Wild Oasis by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
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
