"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { buttonStyle, fontMedium } from "../styles";

type PaginationProps = {
    pageNumber: Number;
    prevIssues: boolean;
    nextIssues: boolean;
};

export default function Pagination({ pageNumber, prevIssues, nextIssues }: PaginationProps) {
    const router = useRouter();

    return (
        <section className="flex justify-center items-center my-8">
            <Button aria-label="previous page button" className={`${buttonStyle} w-[90px]`} size="sm" onClick={() => router.push(`?pageNumber=${Number(pageNumber) - 1}`)} disabled={!prevIssues}>Previous</Button>

            <h1 className={`${fontMedium} mx-7`}>{String(pageNumber)}</h1>

            <Button aria-label="next page button" className={`${buttonStyle} w-[90px]`} size="sm" onClick={() => router.push(`?pageNumber=${Number(pageNumber) + 1}`)} disabled={!nextIssues}>Next</Button>
        </section>
    )
}