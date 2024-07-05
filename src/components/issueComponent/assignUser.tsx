"use client";
import { useRouter } from "next/navigation";
import { DetailsProps, UserProps } from "../types";

export default function AssignUser({ issueData, users }: DetailsProps) {
  const router = useRouter();

  const handleAssignUser = async (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    try {
      const userData = event.target.value;

      if (userData !== "unassigned") {
        let response = await fetch(
          `/api/issues/${issueData.id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ userData }),
          }
        );

        response = await response.json();
        return response.ok ? router.refresh() : null;
      }
    } catch (error) {
      console.error(`Failed to assign issue: ${error}`);
    }
  };

  return (
    <select
      className="block w-max px-3 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none text-[13px] sm:text-sm"
      defaultValue={issueData.userData ? issueData.userData : "unassigned"}
      onChange={handleAssignUser}
    >
      <option value="unassigned" className="text-[13px]">
        Unassigned
      </option>
      {users?.map((user: UserProps) => (
        <option key={user.id} value={user.id} className="text-[13px]">
          {user.name}
        </option>
      ))}
    </select>
  );
}
