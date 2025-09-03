import PostList from "@/pages/blogs/_components/PostList";
import { FolderOpenIcon } from "@heroicons/react/24/outline";

async function Category({ params }) {
  const { categorySlug } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/post/list?categorySlug=${categorySlug}`
  );
  const { data } = await res.json();
  const { posts } = data || {};

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
