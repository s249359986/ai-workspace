import { cookies } from "next/headers";

// 获取登录token
export async function getToken() {
  const cookieStore = await cookies(); // 注意：Next.js 15+ 需要 await
  return cookieStore.get("token")?.value;
}
// 设置登录token
export async function setToken(token: string) {
  const cookieStore = await cookies(); // 注意：Next.js 15+ 需要 await
  cookieStore.set("token", token, {
    httpOnly: true,
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
}

// 清除token
export async function removeToken() {
  const cookieStore = await cookies(); // 注意：Next.js 15+ 需要 await
  cookieStore.delete("token");
}
