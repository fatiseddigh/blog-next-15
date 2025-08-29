import { Suspense } from "react";
import CategoryList from "./_components/CategoryList";
import Spinner from "@/ui/Spinner";

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-primary-50 to-secondary-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Text */}
            <div className="lg:col-span-8 text-center lg:text-left space-y-5">
              <h1 className="typing text-4xl sm:text-5xl font-bold text-gray-900 leading-tight">
                Discover Insights & Stories
              </h1>
              <p className="text-lg text-gray-700 max-w-xl mx-auto lg:mx-0">
                Explore our blog for expert tips, inspiring stories, and
                practical guides designed to spark curiosity and knowledge.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="px-6 py-3 rounded-xl bg-primary-600 text-white hover:bg-primary-700 transition">
                  Start Reading
                </button>
                <button className="px-6 py-3 rounded-xl bg-white text-primary-600 border border-primary-200 hover:bg-primary-50 transition">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Right Illustration */}
            <div className="lg:col-span-4 flex justify-center lg:justify-end">
              <img
                src="/img/blog.gif"
                alt="Blog Illustration"
                className="max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg w-full h-auto"
              />
            </div>
          </div>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-200/40 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 right-10 w-40 h-40 bg-secondary-200/40 rounded-full blur-3xl animate-pulse delay-300"></div>
      </section>

      {/* Blog Content */}
      <main className="w-full min-h-screen px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Categories Sidebar */}
          <aside className="lg:col-span-3 text-secondary-500 space-y-4">
            <Suspense fallback={<Spinner />}>
              <CategoryList />
            </Suspense>
          </aside>

          {/* Blog Posts */}
          <section className="lg:col-span-9 space-y-8">{children}</section>
        </div>
      </main>
    </div>
  );
}
export default Layout;
