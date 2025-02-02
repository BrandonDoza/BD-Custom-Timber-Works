import type { Metadata } from "next";
import "./globals.css";
import { Provider } from "@/components/ui/provider";
import NavBar from "@/components/ui/NavBar";
import Head from "next/head";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BD Custom Timber Works",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Text:ital@0;1&family=Radley:ital@0;1&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body
        style={{
          height: "100vh",
          margin: "0",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Provider>
          <NavBar />
          <main style={{ flex: 1, overflowY: "auto" }}>{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
