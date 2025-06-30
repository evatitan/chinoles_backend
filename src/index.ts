import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/users'; 
import materialRouter from './routes/materials';
import courseRouter from './routes/courses';
import ordersRouter from './routes/orders';
import authRouter from "./routes/admin/auth";
import cors from 'cors';
const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Set to true if you want to allow cookies to be sent
});
app.use(express.json());
app.use(cors())
app.get('/', async (req, res) => {
  res.json({ message: 'Welcome to Chinoles API' });
});

app.use( "/api/users", userRouter)
app.use( "/api/materials", materialRouter)
app.use( "/api/courses", courseRouter)
app.use("/api/orders", ordersRouter)
app.use("/api/auth", authRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

setInterval(() => {}, 1000); // Keeps the process alive for debugging