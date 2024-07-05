"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { githubLogo, googleLogo } from "@/../../public";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { buttonStyle } from "./styles";

export default function LoginButtons() {
    const router = useRouter();
    const { status } = useSession();

    status === "authenticated" ? router.push("/") : null;

    return (
        <div className="grid gap-4">
            <Button aria-label="Login with Google button" className={`w-full flex items-center justify-center gap-2 ${buttonStyle}`} onClick={() => { signIn("google"); }}>
                <Image src={googleLogo} alt="google-logo" width={20} height={20} className="bg-white rounded-[10px] p-[0.9px]"/>
                Login with Google
            </Button>
            <Button aria-label="Login with Github button" className={`w-full flex items-center justify-center gap-2 ${buttonStyle}`} onClick={() => { signIn("github"); }}>
                <Image src={githubLogo} alt="google-logo" width={20} height={20} className="bg-white rounded-[10px] p-[0.9px]"/>
                Login with GitHub
            </Button>
        </div>
    )
}