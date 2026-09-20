export type Locale = "zh-CN" | "en";

export interface LocalizedText {
  "zh-CN": string;
  en: string;
}

export interface Project {
  title: LocalizedText;
  summary: LocalizedText;
  technologies: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const locales: Locale[] = ["zh-CN", "en"];
export const defaultLocale: Locale = "zh-CN";

export const site = {
  displayName: "Your Name",
  title: {
    "zh-CN": "Your Name — 个人主页",
    en: "Your Name — Personal Homepage",
  },
  description: {
    "zh-CN": "请用经过确认的个人简介替换这段文字。",
    en: "Replace this text with a confirmed personal introduction.",
  },
  headline: {
    "zh-CN": "用一句真实、清晰的话介绍你是谁。",
    en: "Describe who you are in one clear, accurate sentence.",
  },
  bio: {
    "zh-CN": "这里是待填写的个人介绍。发布前，请使用用户提供并确认的内容替换。",
    en: "This biography is a placeholder. Replace it with user-provided, confirmed content before publishing.",
  },
  currentFocus: {
    "zh-CN": "填写你当前关注的工作、学习或创作方向。",
    en: "Add the work, learning, or creative direction you are currently focused on.",
  },
  location: {
    "zh-CN": "",
    en: "",
  },
  company: {
    "zh-CN": "",
    en: "",
  },
  email: "",
  githubUrl: "",
} satisfies {
  displayName: string;
  title: LocalizedText;
  description: LocalizedText;
  headline: LocalizedText;
  bio: LocalizedText;
  currentFocus: LocalizedText;
  location: LocalizedText;
  company: LocalizedText;
  email: string;
  githubUrl: string;
};

export const projects: Project[] = [];

export const ui = {
  "zh-CN": {
    home: "首页",
    about: "关于我",
    blog: "博客",
    github: "GitHub",
    skip: "跳到主要内容",
    introEyebrow: "你好，我是",
    readAbout: "了解更多",
    readBlog: "阅读博客",
    recentPosts: "最近文章",
    allPosts: "查看全部文章",
    featuredProjects: "精选项目",
    emptyPosts: "文章正在准备中，稍后再来看看。",
    aboutTitle: "关于我",
    focusTitle: "当前关注",
    detailsTitle: "个人资料",
    location: "所在地",
    company: "组织 / 公司",
    email: "联系邮箱",
    blogTitle: "博客",
    blogIntro: "关于工作、技术与持续学习的记录。",
    readArticle: "阅读全文",
    backToBlog: "返回博客",
    switchLanguage: "English",
    footer: "由可维护的静态内容构建。",
    notFoundTitle: "页面不存在",
    notFoundBody: "这个地址没有对应页面。你可以回到首页继续浏览。",
    backHome: "返回首页",
  },
  en: {
    home: "Home",
    about: "About",
    blog: "Blog",
    github: "GitHub",
    skip: "Skip to main content",
    introEyebrow: "Hello, I’m",
    readAbout: "About me",
    readBlog: "Read the blog",
    recentPosts: "Recent writing",
    allPosts: "View all posts",
    featuredProjects: "Selected projects",
    emptyPosts: "New writing is on the way. Please check back soon.",
    aboutTitle: "About me",
    focusTitle: "Current focus",
    detailsTitle: "Profile",
    location: "Location",
    company: "Organization / company",
    email: "Email",
    blogTitle: "Blog",
    blogIntro: "Notes on work, technology, and continuous learning.",
    readArticle: "Read article",
    backToBlog: "Back to blog",
    switchLanguage: "中文",
    footer: "Built from maintainable static content.",
    notFoundTitle: "Page not found",
    notFoundBody: "There is no page at this address. Return home to keep exploring.",
    backHome: "Back home",
  },
} as const;

