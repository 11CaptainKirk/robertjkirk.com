export const dynamicParams = false; // 404 for posts that don't exist

export async function generateStaticParams() {
  // const posts = await fetch("https://.../posts").then((res) => res.json());
  const posts = [{ slug: "post-1" }, { slug: "post-2" }];
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Post() {
  return (
    <div>
      <h1>Post</h1>
    </div>
  );
}
