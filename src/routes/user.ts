import express from 'express';
import { db } from '../config/database';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await db.select('*').from('users');
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get('/profile', (req, res) => {
  res.json({ message: 'User profile endpoint' });
});

export default router;