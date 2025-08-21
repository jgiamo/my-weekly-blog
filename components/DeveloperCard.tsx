"use client";

import { Avatar, Card, CardBody, CardHeader, Chip } from "@nextui-org/react";

export default function DeveloperCard() {
  return (
    <div className="flex w-full items-start justify-center mt-12">
      <Card className="mt-10 w-[400px]">
        <CardHeader className="relative flex h-[100px] flex-col justify-end overflow-visible bg-gradient-to-br from-indigo-300 via-Cyan-300 to-blue-400">
          <Avatar className="h-20 w-20 translate-y-12" src="/avatar.jpg" />
        </CardHeader>
        <CardBody>
          <div className="pb-4 pt-6">
            <p className="text-large font-medium">小杰</p>
            <p className="max-w-[90%] text-small text-default-400">
              @xiaojie
            </p>
            <div className="flex gap-2 pb-1 pt-2">
              <Chip variant="flat">👨‍💻后端</Chip>
              <Chip variant="flat">🛠️全栈</Chip>
              <Chip variant="flat">✨技术分享</Chip>
              <Chip variant="flat">📚学习笔记</Chip>
            </div>
            <p className="py-2 text-small text-foreground">
              后端开发工程师｜技术博主｜学习分享者
            </p>
            <div className="w-full text-center mt-4 flex justify-evenly">
              {/* 暂时禁用社交链接按钮 */}
              {/* <FollowButton
                name="Twitter/X"
                href="https://twitter.com/yourusername/"
              ></FollowButton>
              <FollowButton
                name="Github"
                href="https://github.com/yourusername/"
              ></FollowButton>
              <FollowButton
                name="掘金"
                href="https://juejin.cn/user/youruserid"
              ></FollowButton> */}
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
