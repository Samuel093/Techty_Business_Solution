export async function fetchPosts() {
  const res = await fetch("https://dummyjson.com/posts?limit=6"); // 6 posts
  if (!res.ok) {
    throw new Error("Failed to fetch posts");
  }
  const data = await res.json();
  return data.posts;
}
