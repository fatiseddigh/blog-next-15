import Spinner from "@/ui/Spinner";
import { Suspense } from "react";
import PostList from "./_components/PostList";

export const metadata = {
  title: "Blog",
};
async function BlogPage() {
  return (
    <div>
      {/* <p className="mb-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo
        voluptate, recusandae quae odio quidem voluptatum asperiores sequi,
        optio veritatis beatae, consequatur facere earum deserunt tempore
        voluptas sed aliquid cum ipsam?
      </p> */}
      <Suspense fallback={<Spinner />}>
        <PostList />
      </Suspense>
    </div>
  );
}

export default BlogPage;
