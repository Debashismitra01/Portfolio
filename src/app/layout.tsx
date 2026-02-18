import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Wahyuni's Portfolio",
  description:
    "Hello, my name is Wahyuni ​​Anti. I am a web developer with my expertise in PHP, Javascript, Kotlin & Java technologies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {" "}
          {children}
      </body>
    </html>
  );
}
