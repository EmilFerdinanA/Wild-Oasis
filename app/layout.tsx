import React from "react";
import Header from "@/app/_components/Header";

import "@/app/_styles/global.css";
import { Josefin_Sans } from "next/font/google";
import { IRootLayoutProps } from "@/constant/types/layout";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  // title: "The wild Oasis",
  title: {
    template: "%s / The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart oh the Italian Dolomites, surrounded by beautiful mountains and dark forest",
};

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} antialiased bg-primary-950 text-primary-100 min-h-screen flex flex-col relative`}
      >
        <Header />
        <div className="flex-1 px-8 py-12 grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
