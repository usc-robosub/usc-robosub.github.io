import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "USC AUV | AUTONOMOUS UNDERWATER VEHICLE TEAM",
  description:
    "USC's premier autonomous underwater vehicle team. Engineering autonomous superiority in underwater robotics for the RoboSub competition.",
  keywords: [
    "USC",
    "AUV",
    "autonomous underwater vehicle",
    "robotics",
    "engineering",
    "RoboSub",
    "defense",
    "underwater systems",
  ],
  authors: [{ name: "USC AUV Team" }],
  icons: {
    icon: "/auv-logo.png",
    apple: "/auv-logo.png",
  },
  openGraph: {
    title: "USC AUV | AUTONOMOUS UNDERWATER VEHICLE TEAM",
    description:
      "USC's premier autonomous underwater vehicle team. Engineering autonomous superiority in underwater robotics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${instrumentSans.variable} ${jetbrainsMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
