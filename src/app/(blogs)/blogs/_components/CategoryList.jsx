import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

async function CategoryList() {
  // await new Promise((res) => setTimeout(res, 2000));
  //
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);
  const {
    data: { categories },
  } = await res.json();

  // p-4 rounded-2xl bg-white/10 backdrop-blur-lg border border-secondary-300/30 shadow-md"
  return (
    <div
      className=" p-4 rounded-2xl z-50 backdrop-blur-lg
                       bg-gradient-to-r from-primary-50/80 to-primary-100/80
                       border-1 border-secondary-100 shadow-lg"
    >
      <h3 className="text-lg font-semibold text-primary-600 mb-4">
        Categories
      </h3>
      <ul className="space-y-2">
        <li>
          <Link
            href="/blogs"
            className="!inline-flex w-full items-center gap-2 px-3 py-4 rounded-xl bg-white/10 hover:bg-secondary-400/20 transition-all text-primary-600 hover:text-primary-900 font-medium hover:font-bold"
          >
            <ArrowRightIcon className="w-4 h-4 text-primary-300" />
            <span>All</span>
          </Link>
        </li>

        {categories.map((category) => (
          <li key={category._id}>
            <Link
              href={`/blogs/category/${category.slug}`}
              className="!inline-flex w-full items-center gap-2 px-3 py-4 rounded-xl bg-white/10 hover:bg-secondary-400/20 transition-all text-primary-600 hover:text-primary-900 font-medium hover:font-bold "
            >
              <ArrowRightIcon className="w-4 h-4 text-primary-300" />
              <span>{category.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default CategoryList;
