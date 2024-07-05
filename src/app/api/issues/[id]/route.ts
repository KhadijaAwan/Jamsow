import prisma from "@/utils/connection";
import { NextResponse } from "next/server";
import { getSessionDetails } from "@/utils/authentication";

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getSessionDetails();
    if (!session)
      return NextResponse.json(
        { message: "Unauthorized Access!" },
        { status: 401 }
      );
    else {
      const issueId = parseInt(params.id);

      const issue = await prisma.issue.findUnique({
        where: { id: issueId },
      });

      await prisma.issue.delete({ where: { id: issueId },});
      return NextResponse.json({ message: "Issue Deleted" }, { status: 200 });
    }
    
  } catch (error) {
    return NextResponse.json(
      { message: `Failed in Deleting Issue! ${error}` },
      { status: 500 }
    );
  }
}

export async function PUT( request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getSessionDetails();
    if (!session)
      return NextResponse.json(
        { message: "Unauthorized Access!" },
        { status: 401 }
      );
      
    else {
      const payload = await request.json();
      const issueId = parseInt(params.id);

      const { caption, description, status } = payload;

      const updateIssue = await prisma.issue.update({
        where: { id: issueId },
        data: { caption, description, status},
      });

      return NextResponse.json(updateIssue, { status: 200 });
    }

  } catch (error) {
    return NextResponse.json(
      { message: `Failed in Updating Issue! ${error}` },
      { status: 500 }
    );
  }
}


export async function PATCH( request: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getSessionDetails();
    if (!session)
      return NextResponse.json(
        { message: "Unauthorized Access!" },
        { status: 401 }
      );
      
    else {
      const payload = await request.json();
      const issueId = parseInt(params.id);

      const { userData } = payload;

      const updateIssue = await prisma.issue.update({
        where: { id: issueId },
        data: { userData },
      });

      return NextResponse.json(updateIssue, { status: 200 });
    }

  } catch (error) {
    return NextResponse.json(
      { message: `Failed in Assigning Issue! ${error}` },
      { status: 500 }
    );
  }
}