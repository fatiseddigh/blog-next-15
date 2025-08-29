import Button from "@/components/ui/Button";
import Link from "next/link";
export const metadata = {
  title: "Home",
};
export default function Home() {
  return (
    <div
      className="relative w-screen flex flex-col items-center justify-center px-6 py-20
                bg-primary-50/30 backdrop-blur-md overflow-hidden"
    >
      {/* Floating decorative shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl animate-floatSlow"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-secondary-200/30 rounded-full blur-3xl animate-floatSlow delay-300"></div>

      {/* Header with subtle animation */}
      <h1
        className="text-4xl md:text-6xl font-extrabold text-center text-primary-900
                 mb-6 leading-tight drop-shadow-sm animate-fadeInDown"
      >
        Your Professional Blog Dashboard
      </h1>

      {/* Subtitle */}
      <p
        className="text-center text-secondary-700 text-lg md:text-xl leading-relaxed max-w-2xl mb-12
                drop-shadow-sm animate-fadeIn delay-200"
      >
        Effortlessly manage blogs, engage with readers, and monitor activity—all
        from a sleek, glassmorphic interface.
      </p>

      {/* Buttons */}
      <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-x-8 w-full animate-fadeIn delay-400">
        <Button
          variant="outline"
          className="border-secondary-400 text-secondary-700
                 hover:bg-secondary-50 hover:scale-105 transition-all duration-300 drop-shadow-sm"
        >
          <Link href="/blogs">Read Blogs</Link>
        </Button>

        <Button
          variant="primary"
          className="bg-gradient-to-r from-primary-500 to-primary-700
                 text-white hover:from-primary-600 hover:to-primary-800
                 hover:scale-105 transition-all duration-300 shadow-lg"
        >
          <Link href="/profile">Manage Blogs</Link>
        </Button>
      </div>
    </div>
  );
}
