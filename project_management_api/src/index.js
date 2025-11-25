import { config } from "dotenv";
import app from "./app.js";
import connectDB from "./db/index.js";
config({ path: "./.env" });

const port = process.env.PORT || 3000;

connectDB()
   .then(() => {
      app.listen(port, () => {
         console.log(`App is running at ${port} port`);
      });
   })
   .catch((err) => {
      console.error("MongoDB connection error", error);
   });
