import { db } from "./../config/database"
import { User } from "../types/usersTypes";


export const findUserByEmail = async (email: string) => { 
  const sql = `select * from  users where email = $1`;
  try {
    const result = await db.raw(sql, [email])
    return result.rows[0]; // Assuming the first row is the user
  } catch (error) {
    throw new Error("Database query failed");
  }
}

export const insertUser = async (user: User) => { 
  const sql = `insert into users (user_name, email, password_hash, role, created_at) values ($1, $2, $3, $4, $5) returning *`;
  try {
    const { user_name, email, password_hash, role } = user;
  const result = await db.insert(sql,[user.user_name, user.email, user.password_hash, user.role, user.created_at, user.updated_at]);
  return result[0]; 
  } catch (error) {
    throw new Error("Database query failed");
  }
}


export const userLogin= async (user: User) => { 
  const sql = ``;
  try {
    return
  } catch (error) {
    throw new Error("Database query failed");
  }
}