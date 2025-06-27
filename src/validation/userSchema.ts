import { z } from "zod"

export const userRegisterSchema = z.object({
  user_name: z.string().min(1, "User name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  role: z.enum(["student", "admin", "teacher"]).default("student"),
  created_at: z.date().default(() => new Date()),
  updated_at: z.date().default(() => new Date())
})