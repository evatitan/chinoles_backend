export interface User {
  user_name: string;
  email?: string;
  password_hash?: string;
  role?: string;
  created_at: Date;
  updated_at: Date;
}