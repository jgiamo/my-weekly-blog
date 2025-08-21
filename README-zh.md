🌍 *[英文](README.md) ∙ [简体中文](README-zh.md)*

# 小杰说 - 个人技术博客

基于 Next.js 14 + MDX 构建的现代化个人技术博客系统。

## ✨ 特性

- 🚀 **Next.js 14** - 最新的 React 框架
- 📝 **MDX 支持** - Markdown + JSX 混合内容
- 🎨 **Tailwind CSS** - 现代化的 CSS 框架
- 🌙 **主题切换** - 支持明暗主题
- 🔍 **全文搜索** - 基于 FlexSearch 的快速搜索
- 📱 **响应式设计** - 完美支持移动端和桌面端
- 🚀 **性能优化** - 静态生成和增量静态再生
- 🔧 **TypeScript** - 完整的类型支持

## 🛠️ 技术栈

- **框架**: Next.js 14
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **内容**: MDX
- **搜索**: FlexSearch
- **部署**: Vercel

## 📁 项目结构

```
my-weekly-blog/
├── app/                 # Next.js 应用目录
├── components/          # React 组件
├── content/            # MDX 博客内容
├── config/             # 配置文件
├── lib/                # 工具函数
├── public/             # 静态资源
├── styles/             # 全局样式
└── types/              # TypeScript 类型定义
```

## 🚀 快速开始

### 1. 克隆项目

```bash
git clone https://github.com/yourusername/my-weekly-blog.git
cd my-weekly-blog
```

### 2. 安装依赖

```bash
npm install
# 或者
yarn install
# 或者
pnpm install
```

### 3. 配置环境

复制 `.env.example` 到 `.env.local` 并配置：

```bash
cp .env.example .env.local
```

### 4. 启动开发服务器

```bash
npm run dev
# 或者
yarn dev
# 或者
pnpm dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

## ⚙️ 配置说明

### 站点配置

编辑 `config/site.ts` 文件：

```typescript
const baseSiteConfig = {
  name: "小杰说",
  description: "小杰的个人技术博客",
  url: "https://your-domain.com",
  authors: [{ name: "小杰", url: "https://your-domain.com" }],
  // ... 其他配置
}
```

### 添加博客文章

在 `content/` 目录下创建 `.mdx` 文件：

```markdown
---
title: 文章标题
slug: 文章标识
date: 2024-01-01
---

文章内容...
```

## 🎨 自定义

### 修改主题色彩

编辑 `tailwind.config.ts` 文件：

```typescript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          // 你的主题色
        }
      }
    }
  }
}
```

### 添加新组件

在 `components/` 目录下创建新的 React 组件。

## 📝 写作指南

### MDX 语法

- 支持标准 Markdown 语法
- 可以嵌入 React 组件
- 支持代码高亮和数学公式

### 文章元数据

每篇文章需要包含以下前置元数据：

```yaml
---
title: 文章标题
slug: 文章标识（用于URL）
date: 发布日期
---
```

## 🚀 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 自动部署

### 其他平台

项目支持部署到任何支持 Node.js 的平台。

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

## 📄 许可证

MIT License

## 📞 联系

- 邮箱：your-email@example.com
- GitHub：https://github.com/yourusername

---

如果这个项目对你有帮助，请给个 ⭐️ 支持一下！