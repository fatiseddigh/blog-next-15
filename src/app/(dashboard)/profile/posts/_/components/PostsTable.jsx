import Empty from "@/ui/Empty";
import Table from "@/ui/Table";
import PostRow from "./PostRow";
import { getPosts } from "@/services/postServices";

async function PostsTable({ query = "" }) {
  const { posts } = await getPosts(query);

  if (!posts.length) return <Empty resourceName="post" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>title</th>
        <th>category </th>
        <th>author</th>
        <th>date</th>
        <th>type</th>
        <th>actions</th>
      </Table.Header>
      <Table.Body>
        {posts.map((post, index) => (
          <PostRow key={post._id} post={post} index={index} />
        ))}
      </Table.Body>
    </Table>
  );
}
export default PostsTable;
