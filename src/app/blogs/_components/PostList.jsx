async function PostList() {
  await new Promise((res) => setTimeout(() => res(), 3000));
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();
  return posts.length > 0
    ? posts.map((post) => {
        return <h1 key={post._id}>{post.title}</h1>;
      })
    : null;
}

export default PostList;
