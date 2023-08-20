import mongoose from "mongoose";
import app from "./app";
import env from "./utils/validateEnv";

const port = env.PORT || 6000;

mongoose
  .connect(env.MONGO_CONNECTION_STRING)
  .then(() => {
    console.log("Mongoose connected");
    app.listen(port, () => {
      console.log("Server running on port: " + port);
    });
  })
  .catch(console.error);
