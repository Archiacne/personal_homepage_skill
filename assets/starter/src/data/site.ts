export type Locale = "en";

export interface Project {
  title: string;
  summary: string;
  technologies: string[];
  repositoryUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const defaultLocale: Locale = "en";

export const site = {
  displayName: "Your Name",
  title: "Your Name — Personal Homepage",
  description: "Replace this text with a confirmed personal introduction.",
  headline: "Describe who you are in one clear, accurate sentence.",
  bio: "This biography is a placeholder. Replace it with user-provided, confirmed content before publishing.",
  currentFocus: "Add the work, learning, or creative direction you are currently focused on.",
  location: "",
  company: "",
  email: "",
  githubUrl: "",
};

export const projects: Project[] = [];

export const ui = {
  en: {
    home: "Home",
    about: "About",
    blog: "Blog",
    github: "GitHub",
    skip: "Skip to main content",
    readAbout: "About",
    readBlog: "Blog",
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
    footer: "Built from maintainable static content.",
    notFoundTitle: "Page not found",
    notFoundBody: "There is no page at this address. Return home to keep exploring.",
    backHome: "Back home",
  },
} as const;
