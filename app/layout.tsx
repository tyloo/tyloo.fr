import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Julien Bonvarlet, développeur freelance senior",
  description: "Développeur freelance senior : backend, frontend, lead technique et développement augmenté par l'IA.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body className="antialiased">{children}</body>
    </html>
  );
}
