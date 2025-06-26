import express from 'express';
import { db } from '../config/database';
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const orders = await db.select('*').from('orders');
    res.json(orders);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});


export default router;