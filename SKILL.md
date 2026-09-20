---
name: personal-homepage-builder
description: 通过对话创建或修改个人主页、About Me 网站、作品集、Markdown Blog 或 GitHub Profile README。适用于个人网站规划与实现、基于内容的重新设计，以及连接主页与 About、Blog、项目和 GitHub。不适用于无关的产品网站、仪表盘、电商网站或孤立的通用前端组件。
metadata:
  short-description: 构建个人网站与 GitHub 主页
---

# Personal Homepage Builder（个人主页构建器）

根据用户提供的内容与约束，构建可运行、可维护的个人网站。将主页作为进入 About、Blog 和 GitHub 的主要入口。当用户提出要求，或双方约定的交付内容中包含此项时，生成 GitHub Profile README。

## 选择实现路径

修改文件前先检查工作区。

1. 对于已有项目，保留其框架、包管理器、设计语言和无关文件。仅将 [references/default-architecture.md](references/default-architecture.md) 用作质量与内容结构指导；不要为了匹配默认方案而迁移项目。
2. 对于用户已指定技术栈的新项目，使用用户选择的技术栈。
3. 对于用户未指定技术栈的新项目，阅读 [references/default-architecture.md](references/default-architecture.md)，并采用默认的 Astro 静态网站方案。
4. 如果用户只需要 GitHub Profile README，不要创建网站项目。

当适合复制内置 starter 时，使用 `scripts/scaffold_site.py <target> --name <project-name>` 创建默认项目。该脚本拒绝写入非空目录；对于已有项目，绝不能绕过此保护。

如果用户要求的技术与必要交付结果存在冲突，说明具体取舍，并遵循用户的最终选择。对于已有安全默认值的技术细节，不要要求用户额外选择。

## 工作流程

### 1. 了解网站需求

创建网站、导入用户资料或重组内容时，阅读 [references/discovery-and-content.md](references/discovery-and-content.md)。

提问前，先提取对话和文件中已经存在的信息。确认：

- 网站用途与目标受众；
- 展示名称与一句话身份介绍；
- 计划包含的 Home、About、Blog、项目、GitHub 和联系方式；
- 用户要求的语言；如未指定，默认使用英文；
- 视觉方向和用户提供的参考资料；
- 发布要求与已有约束。

只询问会实质影响结果的缺失信息。如果内容不完整，使用真实明确的空状态、删除无关区块，或使用醒目标记的占位内容。绝不能虚构个人简介、工作经历、教育经历、项目、数据指标、代码仓库、奖项或联系方式。

### 2. 形成简要方案

实现前，给出一份简短方案，说明：

- 主要受众与希望传达的印象；
- 页面和导航结构；
- 已提供的内容与仍然缺失的内容；
- 视觉方向；
- 选定的实现路径与部署假设。

对于简单明确的需求，说明必要假设后直接继续，无需等待用户逐项批准。

### 3. 构建网站

创建真正可运行的网站，而不是视觉模型。将内容数据与页面展示分离。主页必须清晰链接到 About、Blog，以及用户提供的真实 GitHub URL。

使用语义化 HTML 和响应式、内容优先的布局。创建或大幅修改视觉系统前，阅读 [references/design-quality.md](references/design-quality.md)。

除非用户明确要求其他语言，否则网站正文、页面元数据、导航、示例文案和 GitHub Profile README 均使用英文。每次只生成一种语言。当前暂不支持多语言路由和语言切换控件；如果用户提出此需求，说明限制，并请用户选择本次生成网站使用的一种语言。

如果用户没有提供视觉方向，检查 [assets/reference.html](assets/reference.html)，并默认采用其中居中、极简的个人资料布局。根据用户真实内容和所选框架调整结构；不要复制外部参考中的占位身份、链接或追踪代码。

### 4. 构建 GitHub 主页交付物

创建或修改 GitHub Profile README 时，阅读 [references/github-profile.md](references/github-profile.md)。除非用户明确指定已有的 Profile 仓库，否则将其作为独立交付物保存。

未经用户明确要求并获得必要授权，不得创建远程仓库、替换已有 README、commit、push 或发布。

### 5. 预览与修改

在本地运行网站或创建等效预览。至少检查一个移动端和一个桌面端视口。根据反馈进行本地修改；除非修改要求确实需要扩大范围，否则保留用户已经接受的结构和内容。

### 6. 验证与交付

最终交付或发布前，阅读 [references/validation-and-delivery.md](references/validation-and-delivery.md)。

至少完成：

- 按照项目的 lockfile 策略安装依赖；
- 执行类型检查、内容检查和生产构建；
- 检查已有的 Home、About、Blog、一篇文章和 GitHub 链接；
- 检查键盘操作、可见焦点、标题层级、替代文本、对比度、移动端溢出和浏览器控制台错误；
- 明确区分本地完成与公开部署。

说明已构建的内容、运行方式、内容编辑位置、仍需配置的事项，以及验证过程中的限制。

## 发布边界

默认只在本地生成。仅在用户提出要求时发布。准备或执行部署前，阅读 [references/deployment.md](references/deployment.md)。进行远程修改前，确认准确的代码仓库或托管目标、已有内容的处理方式，以及必要的域名或环境配置。绝不能将密钥保存到源代码、Markdown、构建产物或 Git 历史中。

对于用户要求发布、但未指定服务商的新静态网站，推荐 GitHub Pages。用户指定其他服务商时应予以支持。在确认部署完成前，必须验证公开 URL 可以正常访问。
