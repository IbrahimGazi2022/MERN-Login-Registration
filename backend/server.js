import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js';

import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import express from 'express';

const port = process.env.PORT || 5000;
dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use('/api/users', userRoutes);
app.use(notFound);
app.use(errorHandler);


app.get('/', (req, res) => res.send('API Running'));

app.listen(port, () => console.log(`Server Started on port ${port}`));