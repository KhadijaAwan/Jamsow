export const getIssues = async (pageNumber: Number, status: string) => {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/issues?pageNumber=${pageNumber}&status=${
        status || ""
      }`,
      { cache: "no-store" }
    );
    return response.ok ? response.json() : "Failed to get issues!";
  };
  