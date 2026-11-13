

import express from 'express';
import cookieParser from 'cookie-parser';
import authRouser from './routes/auth.routes'
import userRouter  from "./routes/user.routes"
import adminRouter  from "./routes/admin.routes"

const app = express();


app.use(express.json());
app.use(cookieParser());    

app.get('/', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.use('/auth' , authRouser)
app.use('/user' , userRouter)
app.use('/admin' , adminRouter)

export default app;