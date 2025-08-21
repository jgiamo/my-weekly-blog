import { siteConfig } from "@/config/site";
import Link from "next/link";

const Footer = () => {
  const d = new Date();
  const currentYear = d.getFullYear();
  const { authors } = siteConfig;

  return (
    <footer>
      <div className="mt-16 space-y-2 pt-6 pb-4 flex flex-col items-center text-sm text-gray-400 border-t border-gray-600">
        {/* 暂时隐藏社交链接和产品链接 */}
        {/* <FooterLinks /> */}
        {/* <FooterProducts /> */}
        <div className="flex space-x-2">
          <div>{`©${currentYear}`}</div>{" "}
          <Link href={authors[0].url} target="_blank">
            {authors[0].name}
          </Link>{" "}
          <div>版权所有.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
