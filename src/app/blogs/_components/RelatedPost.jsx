import Image from "next/image";
import Author from "./Author";
import Link from "next/link";

function RelatedPost({ posts }) {
  return (
    <div className="mb-14">
      {/* Section Title */}
      <h2
        className="text-2xl font-bold mb-8 
                     bg-gradient-to-r from-primary-600 via-primary-400 to-secondary-500 
                     bg-clip-text text-transparent"
      >
        Related Posts
      </h2>

      {/* Grid */}
      <div className="grid gap-8 grid-cols-6">
        {posts.map((item) => (
          <div
            key={item._id}
            className="col-span-6 md:col-span-3 lg:col-span-2 group"
          >
            <Link href={`/blogs/${item.slug}`}>
              {/* Image Wrapper */}
              <div className="relative aspect-video overflow-hidden rounded-2xl mb-4">
                <Image
                  src={item.coverImageUrl}
                  alt={item.title}
                  fill
                  quality={80}
                  className="object-cover object-center 
                             group-hover:scale-105 
                             transition-transform duration-500 ease-out"
                />
                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t 
                             from-primary-900/50 via-primary-700/20 to-transparent"
                />
              </div>

              {/* Content */}
              <div
                className="flex items-center justify-between 
                              bg-white/5 backdrop-blur-md 
                              rounded-xl p-3 border border-white/10 
                              transition-colors group-hover:bg-white/10"
              >
                <Author {...item.author} />
                <p className="text-sm font-medium text-secondary-800 line-clamp-2">
                  {item.title}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
export default RelatedPost;
