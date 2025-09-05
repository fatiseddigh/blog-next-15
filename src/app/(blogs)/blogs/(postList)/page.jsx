import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utile/setCookieOnReq";
import { getPosts } from "@/services/postServices";
import queryString from "query-string";
export const metadata = {
  title: "Blog",
};
async function BlogPage({ searchParams }) {
  const queries = queryString.stringify(await searchParams);
  const cookieStore = await cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(queries, options);

  const { search } = await searchParams;
  return (
    <>
      {search ? (
        <p className="mb-4 text-secondary-700">
          {posts.length === 0
            ? "No posts found with these filters"
            : `Showing ${posts.length} result${
                posts.length > 1 ? "s" : ""
              } for`}
          <span className="font-bold">&quot;{search}&quot;</span>
        </p>
      ) : null}
      <PostList posts={posts} />
    </>
  );
}

export default BlogPage;
