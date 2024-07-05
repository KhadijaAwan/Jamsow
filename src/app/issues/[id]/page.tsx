import IssueCaption from "@/components/issueComponent/issueCaption";
import IssueDescription from "@/components/issueComponent/issueDescription";
import prisma from "@/utils/connection";

const getIssue = async(issueId: number) => {
  return await prisma.issue.findUnique({ where: { id: issueId }});
}

const getUsers = async() => {
  return await prisma.user.findMany({ orderBy: { name: "asc" } });
}

export default async function IssueItem({ params }: { params: { id: string } }) {

  const users = await getUsers();
  const issueData = await getIssue(Number(params.id));

  return(
    <div className="w-[92%] md:w-[75%] mx-auto py-10 md:py-16">
      <IssueCaption issueData={issueData} users={users}/>
      <IssueDescription issueData={issueData}/>
    </div>
  );
}
