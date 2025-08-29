import { ClockIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import Author from "./Author";
import PostInteraction from "./PostInteraction";

async function PostList() {
  await new Promise((res) => setTimeout(() => res(), 3000));
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();
  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8 ">
      {posts.map((post) => (
        <div
          key={post._id}
          className="col-span-12 sm:col-span-6 lg:col-span-4   p-4 rounded-2xl backdrop-blur-lg
                       bg-gradient-to-r from-primary-50/80 to-primary-100/80
                       border-1 border-secondary-100 shadow-lg"
        >
          <div className="relative aspect-video overflow-hidden rounded-md">
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              fill
              className="object-cover object-center hover:scale-110 transition-all duration-300 ease-out"
              quality={80}
            />
          </div>
          {/* post content */}
          <div>
            <Link href={`/blogs/${post.slug}`}>
              <h2 className="mb-4 font-bold text-secondary-700 hover:text-primary-900 transition-all ease-out">
                {post.title}
              </h2>
            </Link>

            {/* post author - readingTime */}
            <div className="flex items-center justify-between mb-4">
              <Author {...post.author} />
              <div className="flex items-center text-[10px] text-secondary-500">
                <ClockIcon className="w-4 h-4 stroke-secondary-500 ml-1" />
                <span className="ml-1"> Read:</span>
                <span className="ml-1 leading-3">{post.readingTime}</span>
                <span>min</span>
              </div>
            </div>
            <PostInteraction post={post} />
          </div>
        </div>
      ))}
    </div>
  ) : null;
}

export default PostList;
