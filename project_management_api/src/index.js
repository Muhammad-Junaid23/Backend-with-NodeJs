import { config } from "dotenv";
import app from "./app.js";
config({ path: "./.env" });

const port = process.env.PORT || 3000;

app.listen(port, () => {
   console.log(`App is running at ${port} port`);
});
