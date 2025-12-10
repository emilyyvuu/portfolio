import type { Metadata } from "next";
import Navbar from "../components/layout/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emily Vu - Portfolio",
  description: "Computer science student at Virginia Tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="text-slate-100">
        <div className="min-h-screen w-full px-7">
          <Navbar />
          <main className="py-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
