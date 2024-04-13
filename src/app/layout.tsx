import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Ecommerce",
  description: "Ecommerce application",
  icons: {
    icon: "/images/mainPage.ico",
    // icon: [
    //   {
    //     media: "(prefers-color-scheme: light)",
    //     url: "/images/admin.ico",
    //     href: "/images/admin.ico",
    //   },
    // ],
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
        className={cn(
          "bg-background min-h-screen font-sans antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
