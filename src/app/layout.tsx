import type { Metadata } from "next";
import { Inter} from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Ayuda a evitar FOUT (Flash of Unstyled Text)
});


export const metadata: Metadata = {
  title: "YoussefAKQ's Portfolio",
  description: "Portofolio de Youssef Alexander",
  icons: {
    icon: "./public/images/iconoy.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased min-h-screen scroll-smooth bg-neutral-100 font-sans antialiased selection:bg-neutral-200 dark:bg-neutral-900 dark:selection:bg-neutral-700"`}
      >
        <Analytics />
        {children}
      </body>
    </html>
  );
}
