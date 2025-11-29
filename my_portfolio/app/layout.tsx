import type { ReactNode } from "react";
import "./globals.css";
import { Inter } from "next/font/google";
// import FireCursor from "@/app/FireCursor/FireCursor";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dhanush Portfolio",
  description: "Portfolio of Dhanush",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* <FireCursor/> */}
        {children}
      </body>
    </html>
  );
}
