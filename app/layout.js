import "./globals.css";
import Layout from "@/components/Layout";

import { Caveat } from "next/font/google";

const caveat = Caveat({
  weight: "400",
  subsets: ["cyrillic", "cyrillic-ext"],
  variable: "--font-caveat",
});

export const metadata = {
  title: "Че бум хавать?",
  description: "Генератор меню на неделю",
  icons: {
    icon: "/icons/favicon.png",
    apple: "/icons/favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${caveat.variable} font-caveat text-2xl`}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
