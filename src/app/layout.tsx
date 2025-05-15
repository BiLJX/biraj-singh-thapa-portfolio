import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/nav/nav";




const roboto = Roboto({
  subsets: ['latin'],
  variable: '--font-roboto',
})

const robotMono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
})

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dr. Biraj Singh Thapa",
  description: "Associate Professor at the Department of Mechanical Engineering & Team Leader of Green Hydrogen Lab at Kathmandu University",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${robotMono.variable} antialiased`}
      >
        <NavBar />
        {children}
      </body>
    </html>
  );
}
