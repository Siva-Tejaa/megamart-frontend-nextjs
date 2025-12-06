import type { Metadata } from "next";
import { Assistant } from "next/font/google";
import "./globals.css";
import { defaultMetaData } from "./seo.config";

// Font
const inter = Assistant({ subsets: ["latin"] });

// Meta Data
export const metadata: Metadata = defaultMetaData;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
