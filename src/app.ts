

import express from 'express';
import cookieParser from 'cookie-parser';
import authRouser from './routes/auth.routes'
import userRouter  from "./routes/user.routes"

const app = express();


app.use(express.json());
app.use(cookieParser());    

app.get('/', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.use('/auth' , authRouser)
app.use('/user' , userRouter)

export default app;