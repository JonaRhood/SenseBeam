// app/layout.tsx

import { StoreProvider } from "./StoreProvider";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Logo from "./components/Logo";
import Link from "next/link";
import "./globals.css";
import { PreloadResources } from "./preload-resources";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const res = await fetch('https://dummyjson.com/users?limit=100&sortBy=id&order=asc', {
    cache: 'force-cache',
  });
  const { users } = await res.json();
  users.sort((a: any, b: any) => a.lastName.localeCompare(b.lastName));

  const initialState = {
    patient: {
      patientData: users,
      patientDataFullList: users,
    }
  };

  return (
    <StoreProvider initialState={initialState}>
      <html lang="en">
        <PreloadResources />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="divContainer">
            <div className="divLogo h-[10svh] flex justify-center items-center">
              <div className="logo-container h-full flex justify-center">
                <Link href={"/"} className="object-contain aspect-auto flex">
                  <Logo />
                </Link>
              </div>
            </div>
            <div className="childrenLayout h-[90svh] px-10 flex justify-center">
              <div className="divChildrenLayout h-[85svh] w-full max-w-[1600px] bg-white border-[1px] border-blue-200 rounded-t-2xl relative">
                {children}
              </div>
            </div>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}
