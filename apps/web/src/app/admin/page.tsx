import { getToken } from "@/lib/cookie";
import { logoutAction } from "@/lib/action";

export default function AdminPage() {
  const token = getToken();
  return (
    <div>
      <h1>后台管理</h1>
      <p>当前Token：{token}</p>
      <form action={logoutAction}>
        <button type="submit">退出登录</button>
      </form>
    </div>
  );
}