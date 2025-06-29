import { db } from "./../config/database"
import { User } from "../types/usersTypes";


export const findUserByEmail = async (email: string): Promise<boolean> => { 
  const sql = `select * from users where email = ?`;
  try {
    const result = await db.raw(sql, [email]);
    // For MySQL, result[0] contains the rows
    const rows = result[0];
    return rows.length > 0 && !!rows[0];
  } catch (error) {
    throw new Error("Database query failed");
  }
}

export const insertUser = async (user: User) => { 
  const sql1 = `insert into users (user_name, password, avatar, role, language, level, email, created_at) values (?,?,?,?,?,?,?,?)`;
  const sql = `insert into users (user_name, password, gender, email, created_at) values (?,?,?,?,?)`;
  try {
    const {
      user_name,
      password_hash,
      // avatar,
      // role,
      // language,
      // level,
      email,
      gender,
      created_at
    } = user;
    const result = await db.raw(sql, [
      user_name,
      password_hash,
      // avatar,
      // role,
      // language,
      // level,
      email,
      gender,
      created_at
    ]);

    const insertId = result[0]?.insertId;
    if (!insertId) return null;
    const [rows] = await db.raw('SELECT * FROM users WHERE id = ?', [insertId]);
    return rows[0];
  } catch (error) {
    throw new Error("Database query failed");
  }
}


export const userLogin= async (user: User) => { 
  const sql = `select * from users where email = ?`;
  try {
    const result = await db.raw(sql, [user.email]);
    const rows = result[0];
    return rows[0]
  } catch (error) {
    throw new Error("Database query failed");
  }
}