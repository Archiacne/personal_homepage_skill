# Personal Homepage Builder

[English](./README.md)

一个通过对话创建和修改个人主页、About Me 页面、Markdown 博客、作品集以及 GitHub Profile README 的 Codex Skill。

## 功能

- 创建包含 Home、About、Blog 和 GitHub 导航的可运行个人网站。
- 修改已有网站时沿用项目当前的技术栈和设计语言。
- 用户指定技术栈时优先采用用户方案。
- 新建项目且用户未指定技术栈时，默认使用 Astro + TypeScript 静态架构。
- 支持中文和英文内容，不会把缺失内容或未经确认的翻译虚构成用户事实。
- 单独生成 GitHub Profile README 交付物。
- 检查类型、内容结构、生产构建、内部链接、桌面端布局、基础可访问性和浏览器运行状态。
- 创建仓库、推送 GitHub 或公开发布前，需要用户明确提出要求并提供相应授权。

## 安装

将本仓库复制或克隆到 Codex 的 skills 目录，并确保 `SKILL.md` 位于 Skill 根目录：

```text
~/.codex/skills/personal-homepage-builder/SKILL.md
```

如果 Codex 没有自动识别该 Skill，请重新启动或重新加载 Codex。

## 使用

可以显式调用 Skill，也可以直接描述匹配的建站需求：

```text
使用 $personal-homepage-builder，根据我的简历和 Markdown 文章创建一个中英文个人主页。
```

Skill 会优先保留已有项目的架构。对于没有指定技术栈的新项目，会使用 `references/default-architecture.md` 中定义的默认架构。

默认只在本地生成项目。只有用户明确提出要求时，才会创建远程仓库、推送 GitHub 或公开发布网站。

## 创建默认项目

在一个新的或空的目录中创建默认 Astro 项目：

```text
python scripts/scaffold_site.py ./my-homepage --name my-homepage
```

脚手架脚本不会覆盖非空目录。生成项目后需要：

1. 使用经过用户确认的资料替换 `src/data/site.ts` 中的占位内容。
2. 替换或删除中英文示例文章。
3. 检查 `deliverables/github-profile/README.md` 中的 GitHub Profile 内容。
4. 在生成项目目录中执行 `npm run validate`。

## 默认项目架构

用户没有指定技术方案时，默认使用：

- Astro 静态站点生成；
- TypeScript 严格模式；
- Astro Content Collections 管理 Markdown Blog；
- CSS Custom Properties 和原生 CSS 构建设计系统；
- 原生 JavaScript 处理简单交互；
- 中文与英文页面；
- GitHub Pages、Vercel 和 Netlify 兼容的静态构建产物。

默认不会引入 React、Vue、Tailwind CSS、数据库、CMS、服务端适配器或分析 SDK。只有用户需求确实需要时才会增加。

## 验证 Skill

在仓库根目录执行：

```text
python scripts/validate_skill.py
cd assets/starter
npm ci
npm run validate
```

`npm run validate` 会依次完成：

- Astro 和 TypeScript 检查；
- 内容集合 schema 检查；
- 生产环境静态构建；
- 页面标题、描述、语言、主内容和一级标题检查；
- 图片替代文本检查；
- 内部链接与 GitHub Pages 子路径检查。

仓库的 GitHub Actions 会在 push 和 pull request 时执行相同的 Skill 结构检查与 starter 构建。

## GitHub Pages

生成的默认项目包含 `.github/workflows/deploy.yml`。

将生成项目推送至它自己的 GitHub 仓库后，需要在该仓库的 Pages 设置中选择 **GitHub Actions** 作为发布来源。部署工作流会：

1. 安装 lockfile 中锁定的依赖；
2. 读取仓库实际的 Pages 域名和子路径；
3. 执行完整构建与静态审计；
4. 上传 `dist` 构建产物；
5. 部署并返回公开访问地址。

在所有占位符、示例文章和隐私内容完成检查前，不应启用公开部署。

## 安全边界

- 不虚构用户的工作、教育、项目、奖项、数据或联系方式。
- 不会因为资料文档中出现敏感信息就自动公开这些内容。
- 不将访问令牌、私钥或其他秘密写入源代码、Markdown 或 Git 历史。
- 不会未经允许覆盖已有项目、GitHub Profile README 或线上网站。
- 本地构建成功不等于已经发布；只有公开地址实际可访问并经过检查后，才会报告部署完成。

## 当前开发状态

- Skill 路由、内容规则、默认架构、GitHub Profile 指南、交付检查和按需部署说明已经实现。
- 默认 Astro starter 的 PC 端 Home、About、双语 Blog、文章详情页和语言切换已经完成验证。
- 已提供安全脚手架、构建审计和 GitHub Actions 持续验证。
- 生成项目中包含 GitHub Pages 工作流，但在项目被推送并配置 Pages 之前不会自动发布。
- 移动端专项视觉验收和回归测试安排在后续迭代。
