"use client";
import Footer from '../../components/Shared/Footer/Footer';
import Navbar from './Navbar';
import './globals.css';
import { Inter } from 'next/font/google';


export const metadata = {
  title: 'One Call Kuwait',
  description: 'Home Touch Maintenance for Electric, Plumbing & Satellite',
};

export default function RootLayout ( { children } )
{
  return (
    <html lang="en" suppressHydrationWarning={ true }>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />

      </head>
      <body
        suppressHydrationWarning={ true }
      >
        <nav>
          <Navbar />
        </nav>
        <main>
          { children }
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
