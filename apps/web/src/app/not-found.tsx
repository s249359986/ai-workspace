import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <h2>404 页面不存在</h2>
      <Link href="/">返回首页</Link>
    </div>
  );
}