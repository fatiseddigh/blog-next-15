import { getPostBySlug } from "@/services/postServices";
import Image from "next/image";
import { notFound } from "next/navigation";
import RelatedPost from "../_components/RelatedPost";

// export const dynamicParams = false;

// export async function generateStaticParams() {
//   const { posts } = await getPosts();
//   const slugs = posts.map((post) => ({ slug: post.slug }));
//   return slugs;
// }

export async function generateMetadata({ params }) {
  const post = await getPostBySlug(params.postSlug);
  return {
    title: `post ${post.title}`,
  };
}

async function SinglePost({ params }) {
  await new Promise((res) => setTimeout(() => res(), 500));
  // const post = await getPostBySlug(params.postSlug);
  const { postSlug } = await params;
  const post = await getPostBySlug(postSlug);
  if (!post) notFound();

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-x-hidden">
      <div className="max-w-5xl mx-auto">
        {/* Glass Container */}
        <div className="relative backdrop-blur-2xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 sm:p-12">
          {/* Title */}
          <h1
            className="text-4xl sm:text-5xl font-extrabold mb-6 
                         bg-gradient-to-r from-primary-700 via-primary-500 to-secondary-500 
                         bg-clip-text text-transparent leading-tight"
          >
            {post.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-secondary-500 mb-10">
            <span className="flex items-center gap-1">
              ✍️ {post.author.name}
            </span>
            <span className="flex items-center gap-1">
              📅 {new Date(post.createdAt).toLocaleDateString()}
            </span>
            <span className="flex items-center gap-1">
              ⏱ {post.readingTime} min read
            </span>
          </div>

          {/* Cover Image */}
          <div className="relative aspect-video overflow-hidden rounded-2xl mb-12 shadow-lg group">
            <Image
              src={post.coverImageUrl}
              alt={post.briefText}
              fill
              className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>
          </div>

          {/* Brief Text */}
          <p className="text-xl text-secondary-700 font-medium mb-8 italic">
            {post.briefText}
          </p>

          {/* Main Text */}
          <article className="prose prose-lg max-w-none prose-headings:text-secondary-700 prose-p:text-secondary-600 prose-strong:text-primary-600 prose-a:text-primary-700 hover:prose-a:text-primary-900 prose-blockquote:text-secondary-600 prose-li:marker:text-primary-500">
            {post.text}
          </article>

          {/* Future Sections Placeholder */}

          <div className="mt-16 pt-10 border-t border-white/20 text-center text-sm text-secondary-400">
            {post.related.length > 0 && <RelatedPost posts={post.related} />}
          </div>
        </div>
      </div>

      {/* Decorative BG (Glass aura) */}
      <div className="absolute -top-10 -left-20 w-72 h-72 bg-primary-400/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-32 w-96 h-96 bg-secondary-400/30 rounded-full blur-3xl"></div>
    </section>
  );
}
export default SinglePost;
