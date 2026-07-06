import { serverFetch } from "@/lib/fetch";
import { PostItem } from "@/types";

export default async function HomePage() {
  const posts = await serverFetch<PostItem[]>("/posts?_limit=3");

  return (
    <div>
      <h1>首页（RSC服务端组件）</h1>
      {posts.map((item) => (
        <div key={item.id} style={{ margin: "8px 0" }}>
          <h3>{item.title}</h3>
          <p>{item.body}</p>
        </div>
      ))}
    </div>
  );
}