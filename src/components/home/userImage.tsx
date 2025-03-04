"use client";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function UserImage({ image }: { image: string }) {
  return (
    <Avatar>
      <AvatarImage src={image} alt="user-image"/>
      <AvatarFallback>User</AvatarFallback>
    </Avatar>
  );
}
