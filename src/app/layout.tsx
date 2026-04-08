import "../styles/globals.css"
import Navbar from "./navbar/page";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import Loader from "./loader";
import Footer from "~/components/landing/Footer";

// import { TRPCReactProvider } from "~/trpc/react";

export const metadata: Metadata = {
  title: "Oikyotaan 2026",
  description: "Oikyotaan 2026",
  icons: [{ rel: "icon", url: "/landing/logo.png" }],
  viewport: "width=device-width, initial-scale=1.0",
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body>
        <Loader>
          <Navbar />
          {children}
          <Footer/>
        </Loader>
      </body>
    </html>
  );
}
