import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '@/styles/index.scss'
import { AntdRegistry } from '@ant-design/nextjs-registry';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduGate - Learn Without Borders 🌍📚",
  description:
    "EduGate is a modern e-learning platform offering courses, expert instructors, and insightful blogs. Empower your education journey with a sleek, responsive design.",
  keywords: [
    "EduGate",
    "e-learning",
    "online courses",
    "education platform",
    "study hub",
    "Next.js education website",
    "learning management system",
  ],
  authors: [{ name: "Your Name", url: "https://github.com/your-username" }],
  openGraph: {
    title: "EduGate - Modern E-Learning Platform",
    description:
      "Explore EduGate, a responsive e-learning platform with courses, blogs, and modern UI built with Next.js and TailwindCSS.",
    url: "https://edugate.vercel.app",
    siteName: "EduGate",
    images: [
      {
        url: "https://edugate.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "EduGate preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduGate - Learn Without Borders 🌍📚",
    description:
      "EduGate is a modern education platform built with Next.js and TailwindCSS.",
    images: ["https://edugate.vercel.app/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <AntdRegistry>
          {children}
        </AntdRegistry>
      </body>
    </html>
  )
}
