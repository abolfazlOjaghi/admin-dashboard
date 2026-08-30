import { z } from "zod";

export const productSchema = z.object({
  title: z
    .string({
      error: (issue) =>
        issue.input === undefined ? "This field is required" : "Invalid value",
    })
    .min(3, "Title has to have at least 3 characters")
    .max(20, "Title must not be longer than 20 characters")
    .regex(
      /^[a-zA-Z0-9_ ]+$/,
      "You can only use letters, numbers, spaces and _",
    ),

  price: z.coerce
    .number({
      error: (issue) =>
        issue.input === "" || issue.input === undefined
          ? "This field is required"
          : "Price must be a number",
    })
    .positive("Price must be greater than 0"),

  inventory: z.coerce
    .number({
      error: (issue) =>
        issue.input === "" || issue.input === undefined
          ? "This field is required"
          : "Inventory must be a number",
    })
    .int("Inventory must be a whole number"),

  description: z
    .string({
      error: (issue) =>
        issue.input === undefined ? "This field is required" : "Invalid value",
    })
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must not exceed 500 characters"),
  image: z
    .instanceof(File, { error: "Please upload a product image" })
    .refine((file) => file.size <= 5 * 1024 * 1024, "Image must be under 5MB"),
});
