import Charts from "./charts";
import Statistics from "./statistics";
import {
  closedIssues,
  holdIssues,
  openIssues,
  progressIssues,
  reviewIssues,
} from "@/utils/issues";

export default async function IssueVisuals() {
  const open = await openIssues();
  const inProgress = await progressIssues();
  const inReview = await reviewIssues();
  const onHold = await holdIssues();
  const closed = await closedIssues();

  return (
    <div className="w-[100%] flex flex-col gap-8">
      <Statistics
        open={open}
        inProgress={inProgress}
        inReview={inReview}
        onHold={onHold}
        closed={closed}
      />
      <Charts
        open={open}
        inProgress={inProgress}
        inReview={inReview}
        onHold={onHold}
        closed={closed}
      />
    </div>
  );
}
