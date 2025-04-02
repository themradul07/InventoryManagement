import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "InventoryStore",
  description: "A simple inventory management system",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col justify-between ${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            style: {
              border: "1px solid #007BFF",
              padding: "16px",
              color: "#000",
            },
            iconTheme: {
              primary: "#007BFF",
              secondary: "#F8F9FA",
            },
          }}

        />
        <Navbar />

        {children}
        <Footer />
      </body>
    </html>
  );
}


// import {
//   ClerkProvider,
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from '@clerk/nextjs';
// import { Geist, Geist_Mono } from 'next/font/google';
// import './globals.css';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

// export default function RootLayout({ children }) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
//           <Navbar/>
//           {children}
//           <Footer/>
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }
