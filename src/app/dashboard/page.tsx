import HistoryCard from "@/src/components/dashboard/HistoryCard";
import HotTopicsCard from "@/src/components/dashboard/HotTopicsCard";
import QuizMeCard from "@/src/components/dashboard/QuizMeCard";
import RecentActivityCard from "@/src/components/dashboard/RecentActivityCard";
import { getAuthSession } from "@/src/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

export const metadata = {
  title: "Dashboard | QuizMe",
};

const Dashboard = async (props: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return (
    <main className="p-8 mx-auto max-w-7xl">
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizMeCard />
        <HistoryCard />
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        <HotTopicsCard />
        <RecentActivityCard />
      </div>
    </main>
  );
};

export default Dashboard;
