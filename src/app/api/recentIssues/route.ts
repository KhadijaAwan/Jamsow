import prisma from "@/utils/connection";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const issues = await prisma.issue.findMany({
      orderBy: { createdAt: "desc" },
      take: 5,
      include: {
        user: true,
      },
    });

    return NextResponse.json(issues, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Failed in Retrieving latest Issues! ${error}` },
      { status: 500 }
    );
  }
}
