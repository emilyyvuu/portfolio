import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Emily Vu - Portfolio",
  description: "Computer science student at Virginia Tech",
};

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-sans",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} antialiased`}>
        <ThemeProvider>
          <div className="mx-auto min-h-screen w-full max-w-5xl px-6 sm:px-8">
            <Navbar />
            <main className="py-12">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
