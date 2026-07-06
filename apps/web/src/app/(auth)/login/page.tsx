"use client";
import { useFormState } from "react-dom";
import { loginAction } from "@/lib/action";

const initialState = { code: 0, msg: "", data: null };

export default function LoginPage() {
  const [state, formAction] = useFormState(loginAction, initialState);

  return (
    <form action={formAction}>
      <h2>TS登录页（Server Action）</h2>
      <div style={{ margin: "10px 0" }}>
        <input name="username" placeholder="用户名 admin" required />
      </div>
      <div style={{ margin: "10px 0" }}>
        <input name="password" type="password" placeholder="密码 123456" required />
      </div>
      <button type="submit">登录</button>
      {state.code !== 0 && <p style={{ color: "red" }}>{state.msg}</p>}
    </form>
  );
}