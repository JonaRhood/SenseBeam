'use client'
import Logo from "./components/Logo"
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import NextTopLoader from "nextjs-toploader";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});


export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{
          background: "linear-gradient(to top left, #9de0ff 10%, #beeaff 30%, #ffffff 90%)",
          color: "#171717",
          height: "100svh",
          overflow: "hidden",
          fontFamily: "Arial, Helvetica, sans-serif"
        }}
      >
        <div className="divContainer">
          <div
            className="divLogo"
            style={{
              height: '10svh',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div
              className="logo-container"
              style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Link
                href="/"
                style={{
                  display: 'flex',
                  objectFit: 'contain',
                  alignItems: "center",
                  aspectRatio: 'square',
                  justifyContent: "center",
                }}
              >
                <Logo />
              </Link>
            </div>
          </div>
          <div
            className="childrenLayout"
            style={{
              height: '90svh',
              paddingLeft: '2.5rem',
              paddingRight: '2.5rem',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <div
              className="divChildrenLayout"
              style={{
                height: '85svh',
                width: '100%',
                maxWidth: '1600px',
                backgroundColor: 'white',
                border: '1px solid #bfdbfe',
                borderTopLeftRadius: '1rem',
                borderTopRightRadius: '1rem',
                position: 'relative',
              }}
            >
              <div
                style={{
                  height: "100%",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <NextTopLoader showSpinner={false} />
                <h1 style={{ fontSize: '2rem', margin: 0, color: "#60a5fa", textAlign: "center" }}>
                  Something went wrong
                </h1>
                <p style={{ marginBottom: '1rem', maxWidth: '400px', textAlign: "center", marginInline: "20px" }}>
                  We’re sorry, but there was a problem loading the page. Please try again or go back to the homepage.
                </p>
                <button
                  onClick={reset}
                  style={{
                    backgroundColor: '#3b82f6',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    border: 'none',
                    cursor: 'pointer',
                    marginBottom: '1rem',
                  }}
                >
                  Try Again
                </button>
                <Link href="/" onClick={() => reset()} style={{ textDecoration: 'underline', color: '#3b82f6' }}>
                  Go back to the homepage
                </Link>
              </div>

            </div>
          </div>
        </div>
      </body>
    </html>
  )
}