import Link from "next/link";

async function CategoryList() {
  // await new Promise((res) => setTimeout(res, 2000));
  //   ${process.env.NEXT_PUBLIC_BASE_URL}
  const res = await fetch(`http://localhost:5000/api/category/list`);
  const {
    data: { categories },
  } = await res.json();
  console.log(categories);
  return (
    <ul className="space-y-4">
      <Link href="/blogs">All</Link>
      {categories.map((category) => {
        return (
          <li key={category._id}>
            <Link href={`/blogs/category/${category.slug}`}>
              {category.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
export default CategoryList;
