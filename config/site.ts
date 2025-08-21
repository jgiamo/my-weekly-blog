import { SiteConfig } from "@/types/siteConfig";
// import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
// import { MdEmail } from "react-icons/md";
// import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const baseSiteConfig = {
  name: "小杰说",
  description:
    "小杰的个人技术博客，分享技术心得和学习笔记。",
  url: "https://your-domain.com", // 请替换为你的实际域名
  metadataBase: '/',
  keywords: ["技术博客", "学习笔记", "技术分享"],
  authors: [
    {
      name: "小杰",
      url: "https://your-domain.com",
      // twitter: 'https://twitter.com/yourusername',
    }
  ],
  creator: '@小杰',
  defaultNextTheme: 'dark', // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  // 暂时禁用社交链接
  headerLinks: [
    // { name: 'repo', href: "https://github.com/yourusername", icon: BsGithub },
    // { name: 'twitter', href: "https://twitter.com/yourusername", icon: BsTwitterX },
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/yourusername", icon: SiBuymeacoffee }
  ],
  footerLinks: [
    // { name: 'email', href: "mailto:your-email@example.com", icon: MdEmail },
    // { name: 'twitter', href: "https://twitter.com/yourusername", icon: BsTwitterX },
    // { name: 'github', href: "https://github.com/yourusername", icon: BsGithub },
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/yourusername", icon: SiBuymeacoffee },
    // { name: 'juejin', href: "https://juejin.cn/user/youruserid", icon: SiJuejin },
    // { name: 'weChat', href: "https://yourdomain.com/contact", icon: BsWechat }
  ],
  // 暂时清空产品链接
  footerProducts: [
    // 可以在这里添加你的项目链接
    // { url: 'https://your-project.com/', name: '项目名称' },
  ]
}

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "zh_CN", // 改为中文
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    site: baseSiteConfig.url,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.jpg`],
    creator: baseSiteConfig.creator,
  },
}
