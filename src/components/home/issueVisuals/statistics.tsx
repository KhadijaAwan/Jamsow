import { fontMedium } from "@/components/styles";
import { IssueVisualsProps, StatusTypes, totalIssues } from "@/components/types";
import { Card, CardContent } from "@/components/ui/card";

export default function Statistics({open, inProgress, inReview, onHold, closed} : IssueVisualsProps) {

  const totalIssuesStats: totalIssues[] = [
    { title: 'Open', total: open, status: StatusTypes.OPEN },
    { title: 'In Progress', total: inProgress, status: StatusTypes.IN_PROGRESS },
    { title: 'In Review', total: inReview, status: StatusTypes.IN_REVIEW },
    { title: 'On Hold', total: onHold, status: StatusTypes.ON_HOLD },
    { title: 'Closed', total: closed, status: StatusTypes.CLOSED },
  ];

    return (
     <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-4">
      {totalIssuesStats.map((issueDetail: totalIssues)=>(
        <Card key={issueDetail.status} className="text-center py-2 border-gray-300 border-[2px] rounded-[10px] h-max">
          <CardContent className="mb-[-15px]">
            <h1 className={`${fontMedium.className} mb-2 text-[12.5px]`}>{issueDetail.title}</h1>
            <h2 className={`${fontMedium.className} text-blue-800`}>{issueDetail.total}</h2>
          </CardContent>
        </Card>
      ))}
     </section>
    );
  }
  