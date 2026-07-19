import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sankalp Jadhav — Full-Stack Developer",
  description: "Portfolio of Sankalp Jadhav, a full-stack developer focused on AI-integrated experiences."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
