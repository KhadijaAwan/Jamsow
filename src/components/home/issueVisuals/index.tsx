import Charts from "./charts";
import Statistics from "./statistics";

export default function IssueVisuals({
  open,
  inProgress,
  inReview,
  onHold,
  closed,
}: any) {
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
