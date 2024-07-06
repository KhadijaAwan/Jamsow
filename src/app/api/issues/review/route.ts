import prisma from "@/utils/connection";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const inReview = await prisma.issue.count({
        where: { status: 'IN_REVIEW' },
      });

    return NextResponse.json(inReview, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Failed in Retrieving latest Issues! ${error}` },
      { status: 500 }
    );
  }
}
