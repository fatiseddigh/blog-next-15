import Header from "./profile/_components/Header";
import SideBar from "./profile/_components/SideBar";

export const metadata = {
  title: "profile",
  description: "profile",
};

export default function RootLayout({ children }) {
  return (
    <div className="min-h-[100dvh] bg-gradient-to-br from-primary-600/10 via-primary-400/10 to-secondary-500/10">
      {/* Outer grid: sidebar + content column */}
      <div className="mx-auto max-w-[1600px] lg:grid lg:grid-cols-[260px_1fr]">
        {/* Sidebar (sticky, scrollable if long) */}
        <aside
          className="hidden lg:block lg:sticky lg:top-0 lg:h-[100dvh] overflow-y-auto
                          border-r border-white/10 bg-white/10 backdrop-blur-xl"
        >
          <SideBar />
        </aside>

        {/* Content column: header + main (auto / 1fr) */}
        <div className="min-h-[100dvh] grid grid-rows-[auto_1fr]">
          {/* Header (sticky, glass) */}
          <header className="sticky top-0 z-40 border-b border-white/10 bg-white/10 backdrop-blur-xl ">
            <Header />
          </header>

          {/* Main (only this scrolls) */}
          <main className="bg-white/5 rounded-tl-3xl p-4 md:p-6 overflow-y-auto">
            <div className="max-w-screen-xl mx-auto">{children}</div>
          </main>
        </div>
      </div>
    </div>
  );
}
