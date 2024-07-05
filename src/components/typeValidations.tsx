import {z} from "zod";

export const newIssueType = z.object({
    caption: z.string().min(1).max(255),
    description: z.string().min(1),
});