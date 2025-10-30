import React from "react";
import { Metadata } from "next";
import { Providers } from "../components/Providers";
import "@rainbow-me/rainbowkit/styles.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Trails Nextjs Starter",
  description: "Trails Nextjs Starter",
  icons: {
    icon: "/favicon.svg"
  }
};

export default function App({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body>
        <Providers>
          <main className="min-h-screen bg-gray-100">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
