import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import routerApi from "./routes";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

app.get("/", (_req: Request, res: Response) => {
  res.send("Thumbnail generator api with Express + TypeScript Server");
});

routerApi(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
