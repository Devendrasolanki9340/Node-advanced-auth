
import {connectDB} from './config/db';
import dotenv from 'dotenv';
import http from 'http';
import app from './app';


dotenv.config();




async function startServer() {
    await connectDB();

    const server = http.createServer(app);

    server.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
    });
}

startServer().catch(err => {
    console.error("Error starting server ", err);
    process.exit(1);
})
