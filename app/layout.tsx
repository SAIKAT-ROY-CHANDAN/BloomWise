import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bloom Wise",
  description: "Bloom Wise For sharing Gardening Tips and Tricks",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
          {children}
      </body>
    </html>
  );
}
