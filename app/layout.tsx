import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/layout/Navbar";
import Footer from "./_components/layout/Footer";

export const metadata: Metadata = {
  title: "K. Mashour | Artist & Creative Vision",
  description:
    "Explore the artistic world of K. Mashour — discover original paintings, creative works, and a unique vision brought to life through art.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`h-full antialiased`}>
      <body className="relative min-h-screen bg-brand-black text-white">
        <div>
          <Navbar />
        </div>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
