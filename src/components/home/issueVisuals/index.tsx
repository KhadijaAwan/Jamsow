import prisma from "@/utils/connection";
import Charts from "./charts";
import Statistics from "./statistics";

export default async function IssueVisuals() {

  const open = await prisma.issue.count({
    where: { status: 'OPEN' },
  });

  const inProgress = await prisma.issue.count({
    where: { status: 'IN_PROGRESS' },
  });

  const inReview = await prisma.issue.count({
    where: { status: 'IN_REVIEW' },
  });

  const onHold = await prisma.issue.count({
    where: { status: 'ON_HOLD' },
  });

  const closed = await prisma.issue.count({
    where: { status: 'CLOSED' },
  });

    return (
     <div className="w-[100%] flex flex-col gap-8">
      <Statistics open={open} inProgress={inProgress} inReview={inReview} onHold={onHold} closed={closed}/>
      <Charts open={open} inProgress={inProgress} inReview={inReview} onHold={onHold} closed={closed}/>
     </div>
    );
  }
  