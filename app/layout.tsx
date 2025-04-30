// app/layout.tsx

import StoreProvider from "./StoreProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Logo from "./components/Logo";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SenseBeam",
  description: "SenseBeam",
  icons: {
    icon: '/logo/favicon-32x32.png',
  },
  alternates: {
    languages: {
      'es-ES': '/es-ES'
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoreProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="h-[10svh] flex justify-center items-center">
            <div className="logo-container flex justify-center">
              <Link href={"/"}>
                <Logo />
              </Link>
            </div>
          </div>
          <div className="h-[90svh] px-10">
            <div className="h-[85svh] bg-white border-[1px] border-blue-200 rounded-2xl relative">
              {children}
            </div>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
