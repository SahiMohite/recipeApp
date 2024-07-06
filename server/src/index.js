import dotenv from 'dotenv';
import express from "express"; // work as framework to create our API, Useful in serving our frontend
import cors from "cors"; // helps to setup rules between our frontend and backend
import mongoose from "mongoose"; // A mongoDB arm -  will allow us to write community like queriesand communications to our database in a really simple way
dotenv.config();

import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express(); // to generate a version of our API
const port = process.env.PORT || 3001;

app.use(express.json()); // whenever a data will be send from frontend will be converted to json
app.use(cors()); // to allow our frontend to communicate with our backend

app.use("/auth", userRouter);   // all enpoints related to authentication will be in users.js file -> routes folder
app.use("/recipes", recipesRouter);

mongoose.connect(
  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ynmkn3f.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority&appName=Cluster0`
); // to connect our backend with our database

app.listen(port, () => console.log("SERVER STARTED!")); // tells our API to start
