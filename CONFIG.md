# 配置说明

## 环境变量配置

在项目根目录创建 `.env.local` 文件，包含以下配置：

```bash
# 站点配置
NEXT_PUBLIC_SITE_URL=https://your-domain.com

# 搜索配置 (可选)
NEXT_PUBLIC_DOCSEARCH_APP_ID=your_docsearch_app_id
NEXT_PUBLIC_DOCSEARCH_API_KEY=your_docsearch_api_key
NEXT_PUBLIC_DOCSEARCH_INDEX_NAME=your_index_name

# 评论系统配置 (可选)
NEXT_PUBLIC_GISCUS_REPO=yourusername/your-repo
NEXT_PUBLIC_GISCUS_REPO_ID=your_repo_id
NEXT_PUBLIC_GISCUS_CATEGORY=Announcements
NEXT_PUBLIC_GISCUS_MAPPING=pathname

# 统计代码配置 (可选)
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id
NEXT_PUBLIC_BAIDU_ANALYTICS_ID=your_baidu_id

# 其他配置
NODE_ENV=development
```

## 需要修改的配置文件

### 1. config/site.ts
- 修改站点名称、描述、URL
- 更新作者信息
- 配置社交媒体链接（可选）

### 2. components/DeveloperCard.tsx
- 更新个人信息
- 修改技术标签
- 配置社交链接（可选）

### 3. public/ 目录
- 替换 logo.png、logo.svg
- 更新 avatar.jpg（头像）
- 修改 favicon.ico
- 更新 og.jpg（Open Graph 图片）

### 4. 内容文件
- 在 content/ 目录下添加你的博客文章
- 使用 .mdx 格式，包含必要的 frontmatter

## 部署配置

### Vercel 部署
1. 将代码推送到 GitHub
2. 在 Vercel 中导入项目
3. 配置环境变量
4. 自动部署

### 其他平台
项目支持部署到任何支持 Node.js 的平台。

## 注意事项

1. 确保所有环境变量都以 `NEXT_PUBLIC_` 开头（如果需要在前端使用）
2. 评论系统需要 GitHub 仓库支持
3. 搜索功能需要配置 DocSearch（可选）
4. 统计代码需要相应的服务账号
