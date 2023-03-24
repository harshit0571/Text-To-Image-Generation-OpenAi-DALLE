import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.get("/", async (req, res) => {
  res.send("hello from dall-e");
});

const startserver = () => {
  app.listen(8080, () => {
    console.log("app is working on port 8080");
  });
};
startserver();
