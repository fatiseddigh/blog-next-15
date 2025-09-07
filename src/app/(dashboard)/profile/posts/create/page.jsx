import Breadcrumbs from "@/ui/BreadCrumbs";

export default function Page() {
  return (
    <div>
      <Breadcrumbs
        breadcrumbs={[
          {
            label: "Post List",
            href: "/profile/posts",
          },
          {
            label: "Create post",
            href: "/profile/posts/creae",
            active: true,
          },
        ]}
      />
    </div>
  );
}
