import Header from "@/components/Header";
import "@/styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "block",
});
export const metadata = {
  title: {
    template: "%s | BLOG APP",
    default: "BLOG APP",
  },
  description: "Blog Management application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen">
        <Header />
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
