"use server";

import { removeToken, setToken } from "./cookie";
import { LoginParams, ResponseWrap } from "@/types";
import { redirect } from "next/navigation";

// 登录Server Action
export async function loginAction(
  prevState: ResponseWrap<null> | null,
  formData: FormData
): Promise<ResponseWrap<null>> {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;

  const params: LoginParams = { username, password };

  if (params.username === "admin" && params.password === "123456") {
    await setToken("ts_demo_token_001");
    redirect("/admin");
  }

  return {
    code: 400,
    msg: "账号或密码错误",
    data: null,
  };
}

// 退出登录Action
export async function logoutAction() {
  removeToken();
  redirect("/login");
}