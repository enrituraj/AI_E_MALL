import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar/navbar";
import NextTopLoader from 'nextjs-toploader';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "AI E-Mall | AI Powered ecommerce website",
  description: "A ecommerce website with recommendation system.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NextTopLoader
 color="#2299DD"
 initialPosition={0.08}
 crawlSpeed={200}
 height={3}
 crawl={true}
 showSpinner={true}
 easing="ease"
 speed={200}
 shadow="0 0 10px #2299DD,0 0 5px #2299DD"
/>
        <Navbar/>
        {children}
        </body>
    </html>
  );
}
