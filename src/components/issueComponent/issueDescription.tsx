import { IssueDataProps } from "../types";
import { Card } from "../ui/card";
import DeleteButton from "./deleteButton";
import EditButton from "./editButton";

export default function IssueDescription({
  issueData,
}: {
  issueData: IssueDataProps;
}) {
  return (
    <div className="w-[100%] flex flex-col-reverse md:flex-row justify-center md:justify-between gap-6 mt-8">
      <Card className="p-4 border-gray-300 rounded-[10px] text-sm leading-6 w-[94%] md:w-[83%] mx-auto md:mx-0">
        {issueData?.description}
      </Card>

      <div className="flex md:flex-col gap-2 my-1 md:my-0 mx-auto md:mx-0">
        <EditButton issueData={issueData}/>
        <DeleteButton issueId={issueData?.id} />
      </div>
    </div>
  );
}
