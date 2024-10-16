import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar, Sidebar } from "@/components";

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

export const metadata: Metadata = {
  title: "e-pon",
  description: "A savings system",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen flex flex-col`}
      >
        {/* Navbar takes a portion of the height */}
        <Navbar />

        {/* Sidebar and content take the rest */}
        <div className="flex-1 flex h-[calc(100vh-10vh)] relative">
          {/* Sidebar will float next to the content */}
          <Sidebar />

          {/* Main content area */}
          <div id="container" className="flex-1">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
