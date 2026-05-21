import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Debashis Mitra - Backend & Platform Engineer",
  description:
    "Backend & Platform Engineer. I build and operate scalable services with Spring Boot, Kafka, Docker, Azure, multi-DB architecture and SDK integrations.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
