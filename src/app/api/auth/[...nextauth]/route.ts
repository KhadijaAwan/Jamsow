import { authOptions } from "../../../../utils/authentication";
import NextAuth from "next-auth";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };