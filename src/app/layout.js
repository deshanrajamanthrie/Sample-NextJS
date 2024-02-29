import {Inter } from "next/font/google";
import "./globals.css";

const inter =Inter({ subsets: ["latin"] , weight:'variable'});// pass the by default

export const metadata = {
  title: "Mcode",
  description: "I want to create a new Sample application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
