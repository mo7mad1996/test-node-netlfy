import serverless from "serverless-http";
import express from "express";

const app = express();
const router = express.Router();

router.get("/", (req, res) =>
  res.json({
    itsworking: true,
    node: process.version,
    port: process.env.PORT,
  })
);

app.use("/api/", router);

export const handler = serverless(app);
