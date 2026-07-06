import { ResponseWrap } from "@/types";

const baseUrl = process.env.API_BASE_URL;

/** 服务端组件请求，自带缓存 */
export async function serverFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  try {
      const res = await fetch(`${baseUrl}${path}`, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
      ...options,
    });    
    if (!res.ok) throw new Error("服务端接口请求失败");
  return res.json() as Promise<T>;
  } catch (error) {
    return Promise.resolve([{title:'标题',body:'内容',id:1}] as unknown as T);    
  }  
}

/** 客户端调用本项目/api接口，无缓存 */
export async function clientFetch<T>(
  path: string,
  options: RequestInit = {}
): Promise<ResponseWrap<T>> {
  const res = await fetch(`/api${path}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });
  return res.json() as Promise<ResponseWrap<T>>;
}