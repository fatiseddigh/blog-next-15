"use client";
import useMoveBack from "@/hooks/useMoveBack";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function NotFound() {
  const moveBack = useMoveBack();
  return (
    <div
      className="h-max w-screen flex flex-col items-center justify-center py-11 
                bg-gradient-to-br from-primary-50 to-secondary-50 
                relative overflow-hidden backdrop-blur-md"
    >
      {/* floating background shapes */}
      {/* <div className="absolute top-1 left-10 w-40  bg-primary-200/40 rounded-full blur-3xl animate-pulse"></div> */}
      {/* <div className="absolute bottom-16 right-20 w-56 h-56 bg-secondary-200/40 rounded-full blur-3xl animate-pulse delay-300"></div> */}

      {/* Glass Card */}
      <div className="relative backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-5 text-center max-w-lg">
        <h1 className="text-7xl font-extrabold text-primary-700 drop-shadow-lg mb-4">
          404
        </h1>

        {/* funny character animation */}
        <div className="mb-6 flex justify-center">
          <Image
            src="/img/ro.gif" // مسیر گیف یا انیمیشن
            alt="Lost character"
            width={180}
            height={180}
            className="rounded-xl"
          />
        </div>

        <h2 className="text-2xl font-semibold text-secondary-700 mb-4">
          Oops! Page not found
        </h2>
        <p className="text-secondary-500 mb-10 leading-relaxed">
          The page you are looking for doesn’t exist or has been moved.
        </p>

        <button
          onClick={moveBack}
          className="flex items-center justify-center gap-x-2 mx-auto
                     px-6 py-3 rounded-xl font-medium
                     bg-gradient-to-r from-primary-500/80 to-primary-700/80 
                     text-white shadow-lg backdrop-blur-sm
                     hover:from-primary-600 hover:to-primary-800 
                     hover:scale-105 transition-all duration-300"
        >
          <ArrowLeftIcon className="w-6 h-6" />
          <span>Go Back</span>
        </button>
      </div>
    </div>
  );
}

export default NotFound;
