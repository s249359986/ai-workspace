import { NextResponse } from "next/server";
import { setToken } from "@/lib/cookie";
import { LoginParams, ResponseWrap } from "@/types";

export async function POST(req: Request) {
  const body = (await req.json()) as LoginParams;
  const { username, password } = body;

  if (username === "admin" && password === "123456") {
    setToken("api_token_123");
    return NextResponse.json<ResponseWrap<null>>({
      code: 200,
      msg: "登录成功",
      data: null,
    });
  }

  return NextResponse.json<ResponseWrap<null>>(
    { code: 400, msg: "账号密码错误", data: null },
    { status: 400 }
  );
}