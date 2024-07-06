import prisma from "./connection";

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
  try {
    return await prisma.issue.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      include: {
        user: true,
      },
    });
  } catch (error) {
    console.error("Failed to fetch latest issues:", error);
  }
};
