import { NextResponse } from 'next/server'

// 模拟用户数据库 (实际项目中应查询数据库)
const users = [
  {
    id: '1',
    email: 'user@example.com',
    password: 'password123', // 实际项目中密码必须加哈希存储
    name: 'Test User'
  }
]

export async function POST(request: Request) {
  try {
    // 1. 解析请求体
    const body = await request.json()
    const { email, password } = body

    // 2. 基本验证
    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email and password are required' },
        { status: 400 }
      )
    }

    // 3. 查找用户 (实际项目中请使用数据库查询)
    const user = users.find(u => u.email === email)

    // 4. 验证凭据
    if (!user || user.password !== password) {
      return NextResponse.json(
        { error: 'Invalid email or password' },
        { status: 401 }
      )
    }

    // 5. 生成 Token 或 Session (实际项目中建议使用 JWT 或 NextAuth)
    // 这里仅返回一个简单的模拟 token
    const token = Buffer.from(`${user.id}:${Date.now()}`).toString('base64')

    // 6. 返回成功响应 (不要返回密码)
    return NextResponse.json({
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        name: user.name
      },
      token
    })

  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

