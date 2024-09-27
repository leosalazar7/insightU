import { Quicksand } from "next/font/google";
import type { Metadata } from "next";
import "./globals.scss";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import "@mantine/core/styles.css";
import { ColorSchemeScript, MantineProvider } from "@mantine/core";

const quicksand = Quicksand({ subsets: ["latin"], preload: true });

export const metadata: Metadata = {
  title: "InsightU",
  description: "Main website for InsightU, a Tutoring Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="smooth">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${quicksand.className} gradient`}>
        <main>
          <Navbar></Navbar>
          <MantineProvider>{children}</MantineProvider>
          <Footer></Footer>
        </main>
      </body>
    </html>
  );
}
