"use client";
import { Button } from "../ui/button";
import { customButton } from "../styles";
import { IssueDataProps } from "../types";
import { useIssue } from "@/context";

export default function EditButton({ issueData }: { issueData: IssueDataProps }){
    const { editIssue } = useIssue();

    return(
        <Button
          className={`${customButton} bg-blue-700 hover:bg-blue-800`}
          size="sm" onClick={() => editIssue(issueData)}
        >
          Edit Issue
        </Button>
    );
}