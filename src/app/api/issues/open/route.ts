import prisma from "@/utils/connection";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const open = await prisma.issue.count({
        where: { status: 'OPEN' },
      });

    return NextResponse.json(open, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Failed in Retrieving latest Issues! ${error}` },
      { status: 500 }
    );
  }
}
