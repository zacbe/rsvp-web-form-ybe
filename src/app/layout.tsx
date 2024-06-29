import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RSVP Form YBE",
  description: "RSVP Form YBE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-gray-100">
          {children}
        </div>
      </body>
    </html>
  );
}
