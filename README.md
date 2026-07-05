common

├── llm/

├── embedding/

├── rerank/

├── vector/

├── parser/

├── storage/

├── queue/

├── cache/

└── utils/


modules

├── auth
│
├── workspace
│
├── knowledge
│
├── document
│
├── chat
│
└── rag

auth

├── router.py

├── service.py

├── repository.py

├── schema.py

├── model.py

├── dependency.py

└── permission.py


knowledge

├── router.py

├── service.py

├── repository.py

├── schema.py

├── model.py

└── index.py

创建知识库

删除知识库

修改知识库

获取知识库


document

├── router.py

├── service.py

├── repository.py

├── parser.py

├── splitter.py

├── chunk.py

├── embedding.py

└── task.py


rag

├── retrieve.py

├── rerank.py

├── prompt.py

├── citation.py

└── pipeline.py


chat

├── router.py

├── service.py

├── repository.py

├── stream.py

├── session.py

├── message.py

└── title.py


Chat

↓

Conversation

↓

Message

↓

Stream

↓

LLM





Next.js SaaS Starter   + FastAPI AI Service



                        Browser
                            │
                            ▼
                   Next.js SaaS Starter
        ┌──────────────────────────────────────┐
        │ Auth / Session / RBAC / Dashboard    │
        │ Workspace / Upload / BFF / SSR       │
        └──────────────────────────────────────┘
                            │
                Internal HTTP（REST + SSE）
                            │
                            ▼
                  FastAPI AI Service
        ┌──────────────────────────────────────┐
        │ Chat │ RAG │ Agent │ Workflow │ MCP  │
        │ Embedding │ Parser │ Evaluation      │
        └──────────────────────────────────────┘
                            │
          ┌─────────────────┼──────────────────┐
          ▼                 ▼                  ▼
     PostgreSQL          Redis             MinIO
        │
        ▼
     pgvector



     Browser
    │
    ▼
Next.js（BFF）
    ├── 查询用户信息
    ├── 查询 Workspace
    ├── 查询最近会话
    ├── 查询知识库列表
    └── 必要时调用 FastAPI 获取 AI 数据
    │
    ▼
Browser


Next.js 不应该有业务逻辑

Session
Cookie
Auth
RBAC
API Aggregation（聚合）
Orchestration（编排）
Cache
Streaming
SSR