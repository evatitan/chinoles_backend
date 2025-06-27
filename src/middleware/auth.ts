import { verifyToken } from '../utils/jwt'; 
import dotenv from 'dotenv';
dotenv.config();

const authenticationToken = (req: any, res: any, next: any) => { 
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split("")[1]
  if (!token) { 
    return res.status(401).json({ message: "No token provided" });
  }
  
  try {
    const decoded = verifyToken(token);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(403).json({ message: "Invalid token" });
  }
}

module.exports = { authenticationToken };