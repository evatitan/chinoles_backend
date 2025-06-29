export interface User {
  user_name: string;
  email?: string;
  password_hash?: string;
  // avatar?: string;
  // role?: string;
  // language?: string;
  // level?: string;
  gender: string;
  created_at: Date;
  updated_at: Date;
}