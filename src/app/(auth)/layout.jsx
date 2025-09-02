function Layout({ children }) {
  return (
    <div
      className="h-[calc(100vh-80px)] flex items-center justify-center 
             bg-gradient-to-br from-primary-600/20 via-primary-400/20 to-secondary-500/20 
             relative overflow-hidden"
    >
      {/* background glow circles */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary-600/30 rounded-full blur-3xl animate-pulse -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary-500/30 rounded-full blur-3xl animate-pulse translate-x-1/2 translate-y-1/2"></div>

      {/* card */}
      <div className="w-full max-w-md p-8 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl relative z-10">
        {children}
      </div>
    </div>
  );
}
export default Layout;
