export const getIssues = async (pageNumber: Number, status: string) => {
  const response = await fetch(
    `${process.env.NEXTAUTH_URL}/api/issues?pageNumber=${pageNumber}&status=${
      status || ""
    }`,
    { cache: "no-store" }
  );
  return response.ok ? response.json() : "Failed to get issues!";
};

export const fetchLatestIssues = async () => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/recentIssues`, { cache: "no-store" });
  return response.ok ? response.json() : "Failed to get recent issues!";
};

export const openIssues = async () => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/issues/open`, { cache: "no-store" });
  return response.ok ? response.json() : "Failed to get open issues!";
};

export const progressIssues = async () => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/issues/progress`);
  return response.ok ? response.json() : "Failed to get progress issues!";
};

export const reviewIssues = async () => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/issues/review`);
  return response.ok ? response.json() : "Failed to get review issues!";
};

export const holdIssues = async () => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/issues/hold`);
  return response.ok ? response.json() : "Failed to get hold issues!";
};

export const closedIssues = async () => {
  const response = await fetch(`${process.env.NEXTAUTH_URL}/api/issues/closed`);
  return response.ok ? response.json() : "Failed to get closed issues!";
};
