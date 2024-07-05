"use client";
import PostIssueComponent from "@/components/postIssue";
import { buttonStyle, linkStyle } from "@/components/styles";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function PostIssuePage() {
  const { data: session } = useSession();

  return (
    <>
      {!session ? (
        <div className="flex justify-center items-center h-[90vh]">
          <Link
            href="/login"
            aria-label="Login button"
            className={`${linkStyle} w-[220px] text-center py-2 ${buttonStyle}`}
          >
            Login to Continue
          </Link>
        </div>
      ) : <PostIssueComponent/>}
    </>
  );
}
