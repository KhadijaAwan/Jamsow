"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { customButton } from "../styles";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function DeleteButton({
  issueId,
}: {
  issueId: string | undefined;
}) {
  const issueIdNum = Number(issueId);
  const router = useRouter();

  const handleDelete = async (issueId: number) => {
    const response = await fetch(
      `/api/issues/${issueId}`,
      {
        method: "DELETE",
      }
    );
    return response.ok ? router.push("/issues") : "Failed to get issues!";
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className={`${customButton} bg-red-700 hover:bg-red-800`}
          size="sm"
        >
          Delete Issue
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Confirm Deletion</AlertDialogTitle>
          <AlertDialogDescription>
            Are you sure you want to delete this issue? This action cannot be
            undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel
            className={`${customButton} border-0 text-black bg-gray-300 hover:bg-gray-200`}
          >
            Cancel
          </AlertDialogCancel>
          <AlertDialogAction
            className={`${customButton} border-0 bg-red-700 hover:bg-red-600`}
            onClick={() => handleDelete(issueIdNum)}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
