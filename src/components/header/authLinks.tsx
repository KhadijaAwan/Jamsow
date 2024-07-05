"use client";
import { fontMedium } from "../styles";
import { Button } from "../ui/button";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function AuthLinks() {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <>
        {session ? (
          <DropdownMenu>
            <DropdownMenuTrigger className="outline-none">
                <Avatar className="ml-3 cursor-pointer w-[28px] h-[28px]">
                  <AvatarImage src={session.user?.image!} alt="User image" />
                  <AvatarFallback>{session.user?.name}</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="mt-2 w-48 bg-white shadow-md rounded-md mr-[-76px] md:mr-[-18px]"
            >
              <DropdownMenuItem className="px-4 py-3">
                {session.user?.name}
              </DropdownMenuItem>
              <DropdownMenuItem className="px-4 py-2" onClick={() => signOut()}>
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <Button
            className={`${fontMedium.className} mr-[-10px] md:ml-[-16px] text-gray-300 hover:text-gray-50`}
            onClick={() => router.push("/login")}
          >
            Login
          </Button>
        )}
    </>
  );
}
