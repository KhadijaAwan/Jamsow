"use client";
import {
  IssueVisualsProps,
  StatusTypes,
  totalIssues,
} from "@/components/types";
import { Card } from "@/components/ui/card";
import { useMediaQuery } from "react-responsive";
import {
  ResponsiveContainer,
  BarChart,
  XAxis,
  YAxis,
  Bar,
  Cell,
  LabelList,
} from "recharts";

export default function Charts({
  open,
  inProgress,
  inReview,
  onHold,
  closed,
}: IssueVisualsProps) {
  const isSmallScreen = useMediaQuery({ maxWidth: 500 });

  const totalIssuesStats: totalIssues[] = [
    {
      title: "Open",
      caption: "O",
      total: open,
      status: StatusTypes.OPEN,
      color: "red",
    },
    {
      title: "Progress",
      caption: "P",
      total: inProgress,
      status: StatusTypes.IN_PROGRESS,
      color: "blue",
    },
    {
      title: "Review",
      caption: "R",
      total: inReview,
      status: StatusTypes.IN_REVIEW,
      color: "purple",
    },
    {
      title: "Hold",
      caption: "H",
      total: onHold,
      status: StatusTypes.ON_HOLD,
      color: "orange",
    },
    {
      title: "Closed",
      caption: "C",
      total: closed,
      status: StatusTypes.CLOSED,
      color: "green",
    },
  ];

  const CustomXAxisTick = (props: any) => {
    const { x, y, payload } = props;
    const textSize = isSmallScreen ? "11px" : "14px";
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={0}
          dy={16}
          textAnchor="middle"
          fill="#666"
          fontSize={textSize}
        >
          {payload.value}
        </text>
      </g>
    );
  };

  const CustomLabel = (props: any) => {
    const { x, y, width, height, value } = props;
    const fontSize = isSmallScreen ? "12px" : "14px";
    return (
      <text
        x={x + width / 2}
        y={y + height / 3.5}
        dy={-6}
        fill="#fff"
        textAnchor="middle"
        fontSize={fontSize}
        fontWeight="bold"
      >
        {value}
      </text>
    );
  };

  return (
    <Card className="text-center md:px-8 py-8 border-gray-300 border-[2px] rounded-[10px] ">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={totalIssuesStats}>
          <XAxis dataKey={isSmallScreen ? "caption" : "title"} tick={<CustomXAxisTick />} />
          <Bar dataKey="total" barSize={isSmallScreen ? 26 : 32}>
            <LabelList dataKey="total" content={<CustomLabel />} />
            {totalIssuesStats.map((issue) => (
              <Cell key={issue.status} fill={issue.color} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </Card>
  );
}
