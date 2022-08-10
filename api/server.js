const express = require("express");
require("dotenv").config();
const taskRoutes = require("./routes/task");
const userRoutes = require("./routes/user");

const app = express();
const cors = require('cors')
const mongoose = require("mongoose");

//middleware
app.use(express.json());

app.use(cors()) 

app.use((request, response, next) => {
  next();
});

//routes
app.use("/api/task", taskRoutes);
app.use("/api/user", userRoutes);

//connect to db
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });