import express, { Request, Response } from 'express';
import bcrypt from "bcrypt";
import { generateToken } from '../../utils/jwt';
import { findUserByEmail, insertUser, userLogin } from '../../models/user'; // Assuming you have a User model defined
import { User } from '../../types/usersTypes'; 
import { userRegisterSchema,userLoginSchema } from "../../validation/userSchema";
const app = express.Router();
app.use(express.json());

app.post("/register", async (req: any, res: any) => { 
  const { user_name, email, password } = req.body;
  const parseResult = userRegisterSchema.safeParse(req.body);
  if (!parseResult.success) { 
    return res.status(400).json({ errors: parseResult.error.errors });
  }
  try {
    const existingUser = await findUserByEmail(email);
    if (existingUser) return res.status(400).json({ message: "User already exists" });
    const password_hash = await bcrypt.hash(password, 10);
    const user: User = {
      user_name,
      password_hash,
      avatar:"avatar.jpg",
      role: "student",
      language: "chinese",
      level: "beginner", 
      email,
      created_at: new Date(),
      updated_at: new Date()
    }
    const newUser = await insertUser(user);
    if (!newUser) return res.status(500).json({ message: "Failed to create user" });
    const token = generateToken({ userName: newUser.name, email: newUser.email});
    return res.status(201).json({ message: "User created successfully", token, user: { user_name: newUser.user_name, email: newUser.email } });
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
})

app.post("/login", async (req: any, res: any) => { 
  const { password } = req.body;
  const parseResult = userLoginSchema.safeParse(req.body);
  if (!parseResult.success) { 
    return res.status(400).json({ errors: parseResult.error.errors });
  }
  const existingUser = await userLogin(req.body)
  if (!existingUser) return res.status(400).json({ message: "invalid credentials" });
  const isValidPassword = await bcrypt.compare(password, existingUser.password);
  if (!isValidPassword) return res.status(400).json({ message: "invalid credentials" });
  const token = generateToken({ userName: existingUser.user_name, email: existingUser.email });
  return res.status(200).json({ message: "Login successful", token, user: { user_name: existingUser.user_name, email: existingUser.email } });
})

export default app;