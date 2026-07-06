// 接口统一返回格式
export interface ResponseWrap<T = any> {
  code: number;
  msg: string;
  data: T;
}

// 登录参数
export interface LoginParams {
  username: string;
  password: string;
}

// 文章类型
export interface PostItem {
  id: number;
  title: string;
  body: string;
}