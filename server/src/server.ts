import mongoose from "mongoose";
import app from "./app";
import env from "./utils/validateEnv";

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions;

const port = env.PORT || 6000;

mongoose
  .connect(env.MONGO_CONNECTION_STRING, options)
  .then(() => {
    console.log("Mongoose connected");
    app.listen(port, () => {
      console.log("Server running on port: " + port);
    });
  })
  .catch(console.error);
