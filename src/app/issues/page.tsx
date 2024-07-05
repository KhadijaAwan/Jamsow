import { Status } from "@prisma/client";
import IssueButtons from "@/components/issues/issueButtons";
import IssuesTable from "@/components/issues/issuesTable";
import Pagination from "@/components/issues/pagination";
import { getIssues } from "@/utils/issues";

export default async function Issues({
  searchParams,
}: {
  searchParams: { pageNumber: string; status: Status };
}) {
  const pageNumber = Number(searchParams.pageNumber) || 1;
  const status = searchParams.status;
  const { issues, count } = await getIssues(pageNumber, status);
  const issuePerPage = 7;
  const prevIssues = issuePerPage * (Number(pageNumber) - 1) > 0;
  const nextIssues =
    issuePerPage * (Number(pageNumber) - 1) + issuePerPage < count;

  return (
    <section className="w-[92%] md:w-[75%] mx-auto">
      <IssueButtons pageNumber={pageNumber} status={status} />
      <IssuesTable issues={issues}/>
      <Pagination
        pageNumber={pageNumber}
        prevIssues={prevIssues}
        nextIssues={nextIssues}
      />
    </section>
  );
}
