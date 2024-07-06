import { format } from "date-fns";
import { Status } from "@prisma/client";
import { DateTime } from "next-auth/providers/kakao";
import { string } from "zod";

export type HeaderLinkProps = {
  title: string;
  href: string;
};

type TextColor =
  | "text-red-700"
  | "text-blue-700"
  | "text-purple-700"
  | "text-orange-700"
  | "text-green-700";
type BackgroundColor =
  | "bg-red-50"
  | "bg-blue-50"
  | "bg-purple-50"
  | "bg-orange-50"
  | "bg-green-50";

interface StatusDisplay {
  label: string;
  color: TextColor;
  background: BackgroundColor;
}

export const statusDisplay: Record<Status, StatusDisplay> | any = {
  OPEN: { label: "Open", color: "text-red-700", background: "bg-red-50" },
  IN_PROGRESS: {
    label: "In Progress",
    color: "text-blue-700",
    background: "bg-blue-50",
  },
  IN_REVIEW: {
    label: "In Review",
    color: "text-purple-700",
    background: "bg-purple-50",
  },
  ON_HOLD: {
    label: "On Hold",
    color: "text-orange-700",
    background: "bg-orange-50",
  },
  CLOSED: {
    label: "Closed",
    color: "text-green-700",
    background: "bg-green-50",
  },
};

export type statusOptionProps = {
  title: string;
  value?: Status;
};

export type IssueVisualsProps = {
  open: number;
  inProgress: number;
  inReview: number;
  onHold: number;
  closed: number;
};

export enum StatusTypes {
  OPEN = "OPEN",
  IN_PROGRESS = "IN_PROGRESS",
  IN_REVIEW = "IN_REVIEW",
  ON_HOLD = "ON_HOLD",
  CLOSED = "CLOSED",
}

export type totalIssues = {
  title: string;
  total: number;
  status: StatusTypes;
  color?: string;
  caption?: string;
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return format(date, "EEE dd MMMM, yyyy");
};

export type IssueProps = {
  id: string;
  caption: string;
  status: Status;
  createdAt: DateTime;
  userData?: string;
  user?: UserProps;
};

export type SearchParamsProps = {
  pageNumber: Number;
  status: Status;
  issues?: IssueProps | any;
};

export type UserProps =
  | {
      id: string;
      name: string;
      email: string;
      emailVerified: string;
      image?: string;
      accounts: any;
      sessions: any;
      assignedIssues: any;
    }
  | any;

export type IssueDataProps =
  | {
      id?: string;
      caption: string;
      description: string;
      status?: Status;
      createdAt?: DateTime;
      updatedAt?: DateTime;
      userData?: string;
      user?: UserProps | null;
    }
  | any;

export type DetailsProps = {
  issueData: IssueDataProps;
  users: UserProps;
};

export const statusOptions: { title: string; value?: Status }[] = [
  { title: "All" },
  { title: "Open", value: "OPEN" },
  { title: "In Progress", value: "IN_PROGRESS" },
  { title: "In Review", value: "IN_REVIEW" },
  { title: "On Hold", value: "ON_HOLD" },
  { title: "Closed", value: "CLOSED" },
];

export const statusValues: { title: string; value?: Status }[] = [
  { title: "Open", value: "OPEN" },
  { title: "In Progress", value: "IN_PROGRESS" },
  { title: "In Review", value: "IN_REVIEW" },
  { title: "On Hold", value: "ON_HOLD" },
  { title: "Closed", value: "CLOSED" },
];
