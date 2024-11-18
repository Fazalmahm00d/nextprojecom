import localFont from "next/font/local";
import "./globals.css";
import Header from "./components/reused-components/Header";
import Footer from "./components/reused-components/Footer";
import ReduxProvider from "./components/redux-components/reduxProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Furniro",
  description: "Furniture app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ReduxProvider>
        <ToastContainer position="top-right" autoClose={1500}/>
        <Header/>
        {children}
        <Footer/>
        </ReduxProvider>
      </body>
    </html>
  );
}
