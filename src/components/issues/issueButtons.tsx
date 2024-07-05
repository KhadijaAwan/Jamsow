import Link from "next/link";
import { SearchParamsProps } from "../types";
import IssuesCategory from "./issueCategory";
import { buttonStyle, linkStyle } from "../styles";

export default function IssueButtons({
  pageNumber,
  status,
  issues,
}: SearchParamsProps) {
  return (
    <section className="flex justify-between items-center py-14 md:py-10">
      <IssuesCategory pageNumber={pageNumber} status={status} issues={issues} />
      <Link
        href="/issues/post"
        aria-label="Create Issue button"
        className={`${linkStyle} ${buttonStyle} px-4 py-2 text-sm`}
      >
        New Issue
      </Link>
    </section>
  );
}
