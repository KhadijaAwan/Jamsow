"use client";
import dynamic from "next/dynamic";
import React, { FormEvent } from "react";
import "easymde/dist/easymde.min.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { buttonStyle } from "@/components/styles";
import { useRouter } from "next/navigation";
import { useIssue } from "@/context";
import { statusOptionProps, statusValues } from "./types";

const SimpleMDE = dynamic(() => import("react-simplemde-editor"), {
  ssr: false,
});

export default function PostIssueComponent() {
  const router = useRouter();
  const { issueDetails, setIssueDetails, isEditing, setIsEditing } = useIssue();

  const isFormValid =
    issueDetails.caption.trim() !== "" &&
    issueDetails.description.trim() !== "";

  const method = isEditing ? "PUT" : "POST";
  const apiUrl = isEditing
    ? `/api/issues/${issueDetails.id}`
    : "/api/issues";

  const postFormData = async (e: FormEvent) => {
    try {
      let response = await fetch(apiUrl, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(issueDetails),
      });

      response = await response.json();

      if (isEditing) {
        router.push(`/issues/${issueDetails.id}`);
      } else {
        router.push("/issues");
      }

      router.refresh();
      setIssueDetails({ caption: "", description: "" });
      setIsEditing(false);
    } catch (error) {
      console.error(
        `Failed to ${isEditing ? "update" : "add"} issue: ${error}`
      );
    }
  };

  return (
    <section className="w-[100%] px-4 md:px-10 py-16 mx-auto">
      <Input
        type="text"
        placeholder="Enter Title"
        className="mb-6 border-gray-300 placeholder:text-gray-600 focus:border-purple-800"
        value={issueDetails.caption}
        onChange={(e) =>
          setIssueDetails((prevState: any) => ({
            ...prevState,
            caption: e.target.value,
          }))
        }
      />

      {isEditing && (
        <select
          className="block w-max px-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none text-[13px] sm:text-sm mb-6"
          value={issueDetails.status}
          onChange={(e) =>
            setIssueDetails((prevState: any) => ({
              ...prevState,
              status: e.target.value,
            }))
          }
        >
          {statusValues.map((statusOption: statusOptionProps) => (
            <option
              key={statusOption.title}
              value={statusOption.value}
              className="text-[13px]"
            >
              {statusOption.title}
            </option>
          ))}
        </select>
      )}

      <SimpleMDE
        placeholder="Enter Description"
        value={issueDetails.description}
        className="text-[13px] md:text-sm"
        onChange={(value) =>
          setIssueDetails((prevState: any) => ({
            ...prevState,
            description: value,
          }))
        }
      />
      <div className="flex justify-center md:justify-start">
        <Button
          className={`w-[170px] mb-2 ${buttonStyle}`}
          disabled={!isFormValid}
          onClick={postFormData}
        >
          {isEditing ? "Update " : "Post "} Issue
        </Button>
      </div>
    </section>
  );
}
