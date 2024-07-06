import { fontMedium } from "../styles";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { statusDisplay } from "../types";
import UserImage from "./userImage";
import { fetchLatestIssues } from "@/utils/issues";

export default async function LatestIssues() {
  const recentIssues = await fetchLatestIssues();

  return (
    <Card className="w-[100%] lg:w-[65%] xl:w-[100%] border-gray-300 border-[2px] rounded-[10px] px-3">
      <CardHeader className="mb-[-15px]">
        <CardTitle className={`${fontMedium.className} text-lg mb-5 text-center sm:text-left`}>
          Recent Issues
        </CardTitle>
      </CardHeader>

      {recentIssues?.map((recentIssue, index: number) => (
        <CardContent
          className={`${
            index > 0 ? "mt-4" : null
          } flex flex-col sm:flex-row justify-center sm:justify-between w-[100%] items-center border-b-2`}
          key={recentIssue.id}
        >
          <div className="flex flex-col gap-3">
            <h1 className="text-sm text-gray-700">{recentIssue.caption}</h1>
            <Badge
              className={`p-2 w-max rounded-[5px] mx-auto md:mx-0 mb-4 md:mb-[-8px] tracking-wider ${
                statusDisplay[recentIssue.status].color
              } ${statusDisplay[recentIssue.status].background} hover:${
                statusDisplay[recentIssue.status].background
              }`}
            >
              {statusDisplay[recentIssue.status].label}
            </Badge>
          </div>

          <UserImage image={recentIssue.user?.image!} />
        </CardContent>
      ))}
    </Card>
  );
}
