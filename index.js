import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import dotenv from "dotenv"
import feedbackRoutes from './routes/feedbackRoutes.js';

dotenv.config()
const app = express();

app.use(cors());
app.use(express.json());
connectDB();

app.use('/nextstep', contactRoutes);
app.use('/nextstep', feedbackRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


