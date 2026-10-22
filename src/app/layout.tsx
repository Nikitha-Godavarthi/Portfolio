import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nikitha Godavarthi | Software Engineer",
  description:
    "Software engineer building scalable web products, AI-powered systems, and thoughtful user experiences.",
  keywords: ["Nikitha Godavarthi", "Software Engineer", "React", "Next.js", "AI Engineer", "Full-stack Developer"],
  openGraph: {
    title: "Nikitha Godavarthi | Software Engineer",
    description: "Scalable software, AI-powered systems, and thoughtful digital experiences.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
