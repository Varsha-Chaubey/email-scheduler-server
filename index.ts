import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import { connectDB } from "./db";
import router from "./routes/schedulerRouter";
import cors from 'cors'

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json()); 
app.use("/schedules", router);

app.get("/", (req: Request, res: Response) => {
    res.send("Express + TypeScript Server");
});

connectDB();
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
