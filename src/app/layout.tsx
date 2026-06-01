import type { Metadata } from "next";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";
import "@fontsource/jetbrains-mono/400.css";
import "@fontsource/jetbrains-mono/500.css";
import "@fontsource/jetbrains-mono/600.css";
import "@fontsource/jetbrains-mono/700.css";
import "./globals.css";

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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
