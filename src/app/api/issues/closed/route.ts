import prisma from "@/utils/connection";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(request: Request) {
  try {
    const closed = await prisma.issue.count({
        where: { status: 'CLOSED' },
      });

    return NextResponse.json(closed, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Failed in Retrieving latest Issues! ${error}` },
      { status: 500 }
    );
  }
}
