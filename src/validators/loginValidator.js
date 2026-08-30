import { z } from "zod";
export const loginSchema = z.object({
  username: z
    .string({
      error: (issue) =>
        issue.input === undefined ? "Enter your username" : "Invalid username",
    })
    .regex(
      /^[a-zA-Z0-9_]+$/,
      "You can only use letters, numbers, spaces and _",
    ),
    password : z.string({
        error: (issue) =>
        issue.input === undefined ? "Enter your password" : "Invalid password"
    }).min(8, "password must have at least 8 characters")
});
