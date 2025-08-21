import DeveloperCard from "@/components/DeveloperCard";
import TimeLine from "@/components/TimeLine";
import WeeklyList from "@/components/WeeklyList";
import { getWeeklyPosts } from "@/lib/weekly";
import { PostsByMonth, WeeklyPost } from "@/types/weekly";

export default async function Home() {
  const {
    posts,
    postsByMonth,
  }: { posts: WeeklyPost[]; postsByMonth: PostsByMonth } =
    await getWeeklyPosts();

  return (
    <div className="flex flex-row w-full pt-12">
      <div className="hidden md:block md:w-1/5 pl-6"></div>
      <div className="w-full md:w-3/5 px-6">
        {/* 添加欢迎标题 */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-100 mb-4">欢迎来到小杰说</h1>
          <p className="text-gray-400 text-lg">分享技术心得，记录学习笔记</p>
        </div>

        <WeeklyList posts={posts} />
        <DeveloperCard />
      </div>
      <div className="hidden md:flex justify-end md:w-1/5 pr-6 text-right">
        <TimeLine postsByMonth={postsByMonth}></TimeLine>
      </div>
    </div>
  );
}
