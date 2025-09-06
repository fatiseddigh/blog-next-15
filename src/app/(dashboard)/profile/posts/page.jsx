import PostsTable from "./_/components/PostsTable";

async function Page() {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-secondary-700 mb-12 items-center">
        <h1 className="font-bold text-xl">Posts List</h1>
      </div>

      <PostsTable />
    </div>
  );
}
export default Page;
