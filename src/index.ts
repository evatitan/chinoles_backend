import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import userRouter from './routes/user'; 
import materialRouter from './routes/materials';
import courseRouter from './routes/course';
import ordersRouter from './routes/orders';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;

app.use(express.json());

app.get('/', async (req, res) => {
  res.json({ message: 'Welcome to Chinoles API' });
});

app.use( "/users", userRouter)
app.use( "/materials", materialRouter)
app.use( "/courses", courseRouter)
app.use( "/orders", ordersRouter)

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

setInterval(() => {}, 1000); // Keeps the process alive for debugging