import LoginButtons from "@/components/login";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function Login(){
    return (
        <section className="w-[100%] py-20 lg:py-36 my-3">
            <Card className="mx-auto max-w-sm px-2 md:px-4 py-4 bg-gray-100 rounded-[10px]">
                <CardHeader className="text-center">
                    <CardTitle className="text-xl tracking-wide text-gray-900">Login</CardTitle>
                    <CardDescription>
                        Sign in to your account
                    </CardDescription>
                </CardHeader>
                <CardContent><LoginButtons /></CardContent>
            </Card>
        </section>
    );
}