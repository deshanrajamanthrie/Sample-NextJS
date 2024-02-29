import {Inter } from "next/font/google";
import "./globals.css"; // adding the global css to all files  

const inter =Inter({ subsets: ["latin"] , weight:'variable'});// pass the by default

export const metadata = { // meta data
  title: "Mcode",
  description: "I want to create a new Sample application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body> {/* root eke ati page.jsx ek refer  */}
    </html>
  );
}
