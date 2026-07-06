import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = new URL(request.url);

  const authPages = ["/login"];
  const needLogin = pathname.startsWith("/admin");
  const isLoginPage = authPages.some((p) => pathname.startsWith(p));

  // 未登录访问后台
  if (!token && needLogin) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // 已登录访问登录页
  if (token && isLoginPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/login"],
};