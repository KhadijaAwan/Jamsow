import prisma from "@/utils/connection";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const onHold = await prisma.issue.count({
        where: { status: 'ON_HOLD' },
      });

    return NextResponse.json(onHold, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: `Failed in Retrieving latest Issues! ${error}` },
      { status: 500 }
    );
  }
}
