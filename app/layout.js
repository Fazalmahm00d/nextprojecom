import "./globals.css";
import Header from "./components/reused-components/Header";
import Footer from "./components/reused-components/Footer";
import ReduxProvider from "./components/redux-components/reduxProvider";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
import { Poppins, Montserrat } from 'next/font/google';

// Load fonts with desired weights and subsets
const poppins = Poppins({
  weight: ['400', '600', '700'], // Choose the weights you need
  subsets: ['latin'], // Add subsets
  variable: '--font-poppins', // Optional: Use CSS variable for font
});

const montserrat = Montserrat({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});



export const metadata = {
  title: "Furniro",
  description: "Furniture app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        
        <link rel="icon" href="/assets/Meubel House_Logos-05.png" />
        </Head>
      <body
        className={`${poppins.variable} ${montserrat.variable} font-poppins`}
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
