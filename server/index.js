import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/conect.js";
import PostRoutes from "./Routes/PostRoutes.js";
import DallERoutes from "./Routes/DallERoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("api/v1/post", PostRoutes);
app.use("/api/v1/dalle", DallERoutes);

app.get("/", async (req, res) => {
  res.send("hello from dall-e");
});

const startserver = () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8089, () => {
      console.log("app is working on port 8088");
    });
  } catch (error) {}
};
startserver();
