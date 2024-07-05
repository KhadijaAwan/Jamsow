"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fontMedium } from "../styles";
import { useRouter } from "next/navigation";
import {
  IssueProps,
  formatDate,
  statusDisplay,
} from "../types";
import { useSession } from "next-auth/react";

export default function IssuesTable({ issues }: { issues : IssueProps | any}) {
  const router = useRouter();
  const {data: session} = useSession();

  return (
    <Table>
      <TableHeader>
        <TableRow className="bg-blue-700 hover:bg-blue-700">
          <TableHead className="text-center md:text-left">Issue</TableHead>
          <TableHead className="hidden md:table-cell">Date</TableHead>
          <TableHead className="hidden sm:table-cell">Status</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {issues?.map((issue: IssueProps) => (
          <TableRow
            key={issue.id}
            onClick={() => router.push(session ? `/issues/${issue.id}` : "/login")}
            className="cursor-pointer"
          >
            <TableCell
              className={`bg-purple-50 text-purple-800 text-center md:text-left ${fontMedium.className}`}
            >
              {issue.caption}
            </TableCell>
            <TableCell className="bg-gray-50 hidden md:table-cell">
              {formatDate(issue.createdAt)}
            </TableCell>
            <TableCell
              className={`hidden sm:table-cell ${fontMedium.className} ${
                statusDisplay[issue.status].color
              } ${statusDisplay[issue.status].background} hover:${
                statusDisplay[issue.status].background
              }`}
            >
              {statusDisplay[issue.status].label}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
