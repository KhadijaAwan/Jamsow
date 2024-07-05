import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { SessionDetails } from "@/components/provider";
import { IssueProvider } from "@/context";

const poppins = Poppins({
  subsets: ["latin-ext"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Jamsow",
  description:
    "Jamsow is a Next.js application designed for issue tracking, enabling users to add, update, delete, change the status of issues, and read all existing issues. It provides comprehensive functionality for managing tasks and tracking their progress efficiently.",
  icons: {
    icon: ["/favicon.ico?v=4"],
  },
  keywords: ["Jamsow", "issue tracker", "issue writing", "notes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <IssueProvider>
          <SessionDetails>
            <Header />
            {children}
          </SessionDetails>
        </IssueProvider>
      </body>
    </html>
  );
}
