import { config } from "dotenv";
import express from "express";

config({ path: "./.env" });

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
   res.send("welcome to project management api");
});

app.get("/unknownX", (req, res) => {
   res.send("welcome to project management api");
});

app.listen(port, () => {
   console.log(`App is running at ${port} port`);
});
