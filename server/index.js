import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { userRoute } from './routes/userRouter.js';
import { residencyRoute } from './routes/residencyRoute.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const Port = process.env.PORT || 3000;
app.use('/api/user',userRoute);
app.use('/api/residency',residencyRoute)
app.listen(Port,()=>{
    console.log(`server is running at ${Port}`);
})
