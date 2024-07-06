import prisma from "@/utils/connection";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const inProgress = await prisma.issue.count({
      where: { status: "IN_PROGRESS" },
    });

    return NextResponse.json(inProgress, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Failed in Retrieving latest Issues! ${error}` },
      { status: 500 }
    );
  }
}
