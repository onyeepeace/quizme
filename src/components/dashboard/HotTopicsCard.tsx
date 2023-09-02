import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import WordCloud from "../WordCloud";
import { prisma } from "@/src/lib/db";

type Props = {};

const HotTopicsCard = async (props: Props) => {
  const topics = await prisma.topicCount.findMany({});
  const formattedTopics = topics.map((topic) => ({
    text: topic.topic,
    value: topic.count,
  }));
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        <CardDescription>
          Click on a topic to start a quiz on it.
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">
        <WordCloud formattedTopics={formattedTopics} />
      </CardContent>
    </Card>
  );
};

export default HotTopicsCard;
