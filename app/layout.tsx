import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Noah Spear",
  description: "Personal website of Noah Spear",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
