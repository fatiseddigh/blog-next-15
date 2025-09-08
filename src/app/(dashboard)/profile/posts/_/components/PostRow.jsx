import Table from "@/ui/Table";
import truncateText from "@/utile/truncateText";
import { DeletePost, UpdatePost } from "./Buttons";

// free, premium =>

const typeStyle = {
  free: {
    label: "free",
    className: "badge--success",
  },
  premium: {
    label: "premium",
    className: "badge--secondary",
  },
};

function PostRow({ index, post }) {
  const { title, category, author, createdAt, type } = post;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{truncateText(title, 30)}</td>
      <td>{category.title}</td>
      <td>{author.name}</td>
      <td>{new Date(createdAt).toLocaleDateString()}</td>
      <td>
        <span className={`badge ${typeStyle[type].className}`}>
          {typeStyle[type].label}
        </span>
      </td>
      <td>
        <div className="flex items-center gap-x-3 justify-end">
          <UpdatePost id={post._id} />
          <DeletePost post={post} />
        </div>
      </td>
    </Table.Row>
  );
}
export default PostRow;
