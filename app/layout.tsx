import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="h-[10svh] flex justify-center items-center">
          <h1>SENSEBEAM</h1>
        </div>
        <div className="h-[90svh] px-10">
          <div className="h-[85svh] bg-white border-[1px] border-blue-200 rounded-2xl">
              {children}
          </div>
        </div>
      </body>
    </html>
  );
}
