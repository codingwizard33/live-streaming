import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import dbConnection from "./config/database.js";
import web from "./routes/web.js";

dotenv.config();

dbConnection();

const app = express();

app.use(express.json({ limit: '50mb' }));

app.use(cors({ origin: '*' }));

app.use('/', web);

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started on port ${process.env.PORT || 3000}.`);
});