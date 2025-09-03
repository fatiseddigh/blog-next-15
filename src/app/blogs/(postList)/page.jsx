import PostList from "../_components/PostList";
import { cookies } from "next/headers";
import setCookieOnReq from "@/utile/setCookieOnReq";
import { getPosts } from "@/services/postServices";
export const metadata = {
  title: "Blog",
};
async function BlogPage() {
  const cookieStore = cookies();
  const options = setCookieOnReq(cookieStore);
  const posts = await getPosts(options);
  return (
    <div>
      {/* <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
        voluptate, recusandae quae odio quidem voluptatum asperiores sequi,
        optio veritatis beatae, consequatur facere earum deserunt tempore
        voluptas sed aliquid cum ipsam?
      </p> */}
      {/* <Suspense fallback={<Spinner />}> */}
      <PostList posts={posts} />
      {/* </Suspense> */}
    </div>
  );
}

export default BlogPage;
