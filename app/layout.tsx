import type { Metadata } from "next";
import ClientRootLayout from "./ClientRootLayout";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import NavBar from "../components/NavBar";

config.autoAddCss = false;
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "زهرا رجبی فرجاد",
  description: "روانشناس و مشاور تحصیلی",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <ClientRootLayout>{children}</ClientRootLayout>
      </body>
    </html>
  );
}
