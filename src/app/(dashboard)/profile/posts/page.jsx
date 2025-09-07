import Search from "@/ui/Search";
import PostsTable from "./_/components/PostsTable";
import { CreatePost } from "./_/components/Buttons";
import queryString from "query-string";
import { Suspense } from "react";
import Spinner from "@/ui/Spinner";
import Pagination from "@/ui/Pagination";
import { getPosts } from "@/services/postServices";

async function Page({ searchParams }) {
  const query = queryString.stringify(await searchParams);
  const { totalPages } = await getPosts(query);
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl">Posts List</h1>
        <Search />
        <CreatePost />
      </div>
      <Suspense fallback={<Spinner />} key={query}>
        <PostsTable query={query} />
      </Suspense>
      <div className="mt-5 flex w-full justify-center">
        <Pagination totalPages={totalPages} />
      </div>
    </div>
  );
}
export default Page;
