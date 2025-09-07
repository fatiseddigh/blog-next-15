import Breadcrumbs from "@/ui/BreadCrumbs";
import CreatePostForm from "./_/CreatePostForm";

export default function Page() {
  return (
    <div className="p-6 lg:p-10">
      {/* Wrapper */}
      <div className="mt-8 max-w-4xl mx-auto">
        {/* Breadcrumbs */}
        <Breadcrumbs
          breadcrumbs={[
            { label: "Post List", href: "/profile/posts" },
            {
              label: "Create Post",
              href: "/profile/posts/create",
              active: true,
            },
          ]}
        />
        {/* Card Glassmorphism */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-primary-700 mb-6">
            Create New Post
          </h2>
          <CreatePostForm />
        </div>
      </div>
    </div>
  );
}
