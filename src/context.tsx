"use client";
import { useRouter } from "next/navigation";
import { IssueDataProps } from "./components/types";
import { ReactNode, createContext, useContext, useState } from "react";

interface IssueContextType {
  issueDetails: IssueDataProps;
  setIssueDetails: React.Dispatch<React.SetStateAction<IssueDataProps>>;
  isEditing: boolean;
  setIsEditing: React.Dispatch<React.SetStateAction<boolean>>;
  editIssue: (issue: IssueDataProps) => void;
}

const IssueContext = createContext<IssueContextType>({
  issueDetails: {
    caption: "",
    description: "",
  },
  setIssueDetails: () => {},
  isEditing: false,
  setIsEditing: () => {},
  editIssue: (issue: IssueDataProps) => {},
});

export const useIssue = () => useContext(IssueContext);

export const IssueProvider = ({ children }: { children: ReactNode }) => {
  const router = useRouter();

  const [issueDetails, setIssueDetails] = useState<IssueDataProps>({
    caption: "",
    description: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  const editIssue = (issue: IssueDataProps) => {
    setIsEditing(true);
    setIssueDetails(issue);
    router.push("/issues/post");
  };

  return (
    <IssueContext.Provider
      value={{
        issueDetails,
        setIssueDetails,
        isEditing,
        setIsEditing,
        editIssue,
      }}
    >
      {children}
    </IssueContext.Provider>
  );
};
