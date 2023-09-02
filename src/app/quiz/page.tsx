import QuizCreation from "@/src/components/QuizCreation";
import { getAuthSession } from "@/src/lib/nextauth";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  searchParams: {
    topic?: string;
  };
};

export const metadata = {
  title: "Quiz | QuizMe",
};

const QuizPage = async ({ searchParams }: Props) => {
  const session = await getAuthSession();
  if (!session?.user) {
    return redirect("/");
  }
  return <QuizCreation topicParam={searchParams.topic ?? ""} />;
};

export default QuizPage;
