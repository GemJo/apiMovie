require('dotenv').config();

import express from 'express';
import cors from 'cors';
import { routes } from "./routes";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors(
  {
    credentials: true,
    origin: ["http://localhost:8080"]
  }
));

routes(app);

app.listen(8000, () => {
  console.log('listening to port 8000');
});