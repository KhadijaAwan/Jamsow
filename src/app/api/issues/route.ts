import prisma from "@/utils/connection";
import { NextResponse } from "next/server";
import { newIssueType } from "@/components/typeValidations";
import { getSessionDetails } from "@/utils/authentication";
import { Status } from "@prisma/client";

export async function POST(request: Request) {
  try {
    const session = await getSessionDetails();
    if (!session) return NextResponse.json({}, { status: 401 });
    else {
      const payload = await request.json();
      const validData = newIssueType.safeParse(payload);

      if (!validData.success) {
        return NextResponse.json(validData.error.errors, { status: 400 });
      } else {
        const newIssue = await prisma.issue.create({
          data: { caption: payload.caption, description: payload.description },
        });
        return NextResponse.json(newIssue, { status: 200 });
      }
    }
  } catch (error) {
    return NextResponse.json(
      { message: `Failed in Posting Issue! ${error}` },
      { status: 500 }
    );
  }
}

export async function GET(request: Request) {
  try {
    const issuesOnPage = 7;
    const { searchParams } = new URL(request.url);
    const pageNumber = Number(searchParams.get("pageNumber"));
    const status = searchParams.get("status");

    const validStatuses = Object.values(Status);
    const statusFilter =
      status && validStatuses.includes(status as Status)
        ? { status: status as Status }
        : {};

    const requestQuery = {
      take: issuesOnPage,
      skip: issuesOnPage * (pageNumber - 1),
      where: statusFilter,
    };

    const [issues, count] = await prisma.$transaction([
      prisma.issue.findMany(requestQuery),
      prisma.issue.count({ where: requestQuery.where }),
    ]);

    return NextResponse.json({ issues, count }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Failed in Retrieving Issues! ${error}` },
      { status: 500 }
    );
  }
}
