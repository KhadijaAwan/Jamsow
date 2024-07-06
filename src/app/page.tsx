export const revalidate = 8;

import HomeComponent from "@/components/home";
import { fetchLatestIssues } from "@/utils/issues";
import {
  closedIssues,
  holdIssues,
  openIssues,
  progressIssues,
  reviewIssues,
} from "@/utils/issues";

export default async function Home() {
  const recentIssues = await fetchLatestIssues();
  const open = await openIssues();
  const inProgress = await progressIssues();
  const inReview = await reviewIssues();
  const onHold = await holdIssues();
  const closed = await closedIssues();

  return <HomeComponent recentIssues={recentIssues} open={open} inProgress={inProgress} inReview={inReview} onHold={onHold} closed={closed}/>
}
