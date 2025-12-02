import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Source_Code_Pro } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import type { ReactNode } from "react";

const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio of Julien 'Tyloo' Bonvarlet",
  description: "Portfolio of Julien 'Tyloo' Bonvarlet. It contains all my projects, experiences, skills and a blog where I share my thoughts and ideas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${sourceCodePro.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
