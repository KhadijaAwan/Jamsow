import IssueVisuals from "./issueVisuals";
import LatestIssues from "./latestIssues";

export default function HomeComponent(){
    return(
        <div className="w-[100%] px-4 md:px-10 py-16 flex flex-col lg:flex-row items-center justify-start lg:justify-between gap-8 lg:gap-6">
            <IssueVisuals/>
            <LatestIssues/>
        </div>
    )
}