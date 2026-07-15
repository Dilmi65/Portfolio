import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dilmi Edirisinghe — Portfolio",
  description:
    "IT undergraduate and psychology & counselling student building software with a people-first lens. Portfolio of Dilmi Edirisinghe.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
