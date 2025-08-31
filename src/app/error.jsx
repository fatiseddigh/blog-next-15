"use client";

function Error({ error, reset }) {
  return (
    <div className="h-[calc(100vh-80px)] flex items-center justify-center bg-gradient-to-br from-[#4A6DFF]/10 via-[#8B5CF6]/10 to-[#C084FC]/10 backdrop-blur-sm">
      <div className="rounded-2xl bg-white/10 shadow-lg backdrop-blur-xl border border-white/20 p-10 max-w-md text-center">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-red-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01M4.93 4.93l14.14 14.14M12 2a10 10 0 100 20 10 10 0 000-20z"
              />
            </svg>
          </div>
        </div>

        <p className="text-lg font-semibold text-red-400 mb-4">
          {error.message || "Something went wrong!"}
        </p>

        <p className="text-gray-300 text-sm mb-6">
          An unexpected error occurred. Please try again.
        </p>

        <button
          onClick={reset}
          className="px-6 py-2 rounded-xl bg-gradient-to-r from-[#4A6DFF] to-[#8B5CF6] text-white font-medium shadow-md hover:scale-105 transition-transform"
        >
          🔄 Try again
        </button>
      </div>
    </div>
  );
}
export default Error;
