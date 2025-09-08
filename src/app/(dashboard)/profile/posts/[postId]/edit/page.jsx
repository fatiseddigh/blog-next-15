import { getPostById } from "@/services/postServices";
import Breadcrumbs from "@/ui/BreadCrumbs";
import CreatePostForm from "../../create/_/CreatePostForm";

async function EditPage({ params }) {
  const { postId } = await params;
  const { post } = await getPostById(postId);

  if (!post) {
    notFound();
  }

  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "Posts list",
            href: "/profile/posts",
          },
          {
            label: "Edit post",
            href: `/profile/posts/${postId}/edit`,
            active: true,
          },
        ]}
      />
      <CreatePostForm postToEdit={post} />
    </div>
  );
}
export default EditPage;
