import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({ path: "./env" });

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log("Listening on port", process.env.PORT || 3000);
    });
  })
  .catch((error) => {
    console.log("Error in connectDB function for connecting to db", error);
  });
