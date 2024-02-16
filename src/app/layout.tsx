import type { Metadata } from "next";
import { Be_Vietnam_Pro, Inter } from "next/font/google";
// import "./globals.css";

const fontSans = Be_Vietnam_Pro({
  display: "swap",
  weight: ["400", "500", "600", "700"],
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: "Eve-ly",
  description: "Eve-ly Cinema",
  openGraph: {
    title: "Eve-ly Cinema by Cuong Thieu",
    description: "Eve-ly Cinema by Thieu Tran Cuong",

    siteName: "Eve-ly",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body
        style={{ margin: 0 }}
        suppressHydrationWarning={true}
        className={fontSans.className}
      >
        {children}
      </body>
    </html>
  );
}
