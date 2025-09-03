import { ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import PostInteraction from "./PostInteraction";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utile/setCookieOnReq";
import { getPosts } from "@/services/postServices";

async function PostList() {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(options);

  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8 mb-16">
      {posts.map((post) => (
        <div
          key={post._id}
          className="col-span-12 sm:col-span-6 lg:col-span-4 group
                 p-5 rounded-2xl backdrop-blur-lg
                 bg-gradient-to-br from-primary-50/60 to-primary-100/60
                 border border-secondary-100/50 shadow-md
                 hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
        >
          <div className="relative aspect-video overflow-hidden rounded-2xl mb-4">
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              fill
              quality={80}
              className="object-cover object-center 
                     group-hover:scale-110 
                     transition-transform duration-500 ease-out"
            />
            {/* Gradient for imag*/}
            <div
              className="absolute inset-0 bg-gradient-to-t 
                        from-primary-900/40 via-primary-700/10 to-transparent"
            />
          </div>

          <Link href={`/blogs/${post.slug}`}>
            <h2
              className="mb-3 text-lg font-bold 
                       text-secondary-200 dark:text-secondary-900
                       group-hover:text-primary-600 dark:group-hover:text-primary-300
                       transition-colors duration-300"
            >
              {post.title}
            </h2>
          </Link>

          <div className="flex items-center justify-between mb-4 text-sm">
            <Author {...post.author} />

            <div className="flex items-center text-secondary-500 dark:text-secondary-300 text-xs">
              <ClockIcon className="w-4 h-4 mr-1 opacity-70" />
              <span>{post.readingTime} min</span>
            </div>
          </div>

          <PostInteraction post={post} />
        </div>
      ))}
    </div>
  ) : null;
}

export default PostList;
