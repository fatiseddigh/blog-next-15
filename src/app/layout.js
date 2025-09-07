import Header from "@/components/Header";
import AuthProvider from "@/context/AuthContext";
import "@/styles/globals.css";
import { Inter } from "next/font/google";
import ReactQueryProvider from "provider/ReactQueryProvider";
import { Toaster } from "react-hot-toast";

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
        <Toaster />
        <ReactQueryProvider>
          <AuthProvider>
            <div>{children}</div>
          </AuthProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
