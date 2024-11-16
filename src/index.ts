import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://localhost:27017/")
  .then(() => {
    const app = express();
    const port = 3001;
    app.listen(port, () => {
      console.log(`🚀 Server is running on port http://localhost:${port}`);
    });
  })
  .catch((error) => console.error("Error connecting to the database", error));
