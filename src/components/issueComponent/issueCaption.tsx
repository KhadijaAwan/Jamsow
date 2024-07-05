import { Badge } from "../ui/badge";
import { fontSemibold } from "../styles";
import AssignUser from "./assignUser";
import { DetailsProps, formatDate, statusDisplay } from "../types";

export default function IssueCaption({ issueData, users }: DetailsProps) {
  return (
    <section className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-6">
      <div className="flex flex-col gap-3">
        <h1 className={`mb-2 md:mb-0 text-lg text-center md:text-left text-gray-900 ${fontSemibold.className}`}>
          {issueData.caption}
        </h1>

        <div className="flex items-center justify-center md:justify-start">
          <Badge
            className={`px-2 py-1 w-max rounded-[5px] mr-4 tracking-wider ${
              statusDisplay[issueData.status].color
            } ${statusDisplay[issueData.status].background} hover:${
              statusDisplay[issueData.status].background
            }`}
          >
            {statusDisplay[issueData.status].label}
          </Badge>
          <h2 className="text-xs">{formatDate(issueData.createdAt)}</h2>
        </div>
      </div>

      <AssignUser issueData={issueData} users={users} />
    </section>
  );
}
