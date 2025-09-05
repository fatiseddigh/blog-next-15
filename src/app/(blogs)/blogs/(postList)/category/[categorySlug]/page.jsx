import PostList from "@/pages/blogs/_components/PostList";
import { getPosts } from "@/services/postServices";
import setCookieOnReq from "@/utile/setCookieOnReq";
import { FolderOpenIcon } from "@heroicons/react/24/outline";
import { cookies } from "next/headers";
import queryString from "query-string";

async function Category({ params, searchParams }) {
  const { categorySlug } = await params;

  const queries = `${queryString.stringify(
    await searchParams
  )}&categorySlug=${categorySlug}`;

  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(queries, options);

  return (
    <div className="w-full">
      {posts.length === 0 ? (
        <div
          className="flex flex-col items-center justify-center p-10 
                        rounded-2xl bg-white/10 backdrop-blur-xl 
                        border border-white/20 shadow-lg text-center"
        >
          <FolderOpenIcon className="w-12 h-12 text-secondary-500 mb-4" />
          <p className="text-lg font-semibold text-primary-500 drop-shadow-sm">
            No posts found in this category
          </p>
          <p className="text-sm text-gray-300 pt-3">
            Try exploring other categories
          </p>
        </div>
      ) : (
        <PostList posts={posts} />
      )}
    </div>
  );
}

export default Category;
