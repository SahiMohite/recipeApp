import express from "express"; // work as framework to create our API, Useful in serving our frontend
import cors from "cors"; // helps to setup rules between our frontend and backend
import mongoose from "mongoose"; // A mongoDB arm -  will allow us to write community like queriesand communications to our database in a really simple way

import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express(); // to generate a version of our API

app.use(express.json()); // whenever a data will be send from frontend will be converted to json
app.use(cors()); // to allow our frontend to communicate with our backend

app.use("/auth", userRouter);   // all enpoints related to authentication will be in users.js file -> routes folder
app.use("/recipes", recipesRouter);

mongoose.connect(
  "mongodb+srv://sahilmohite:psNocrxwY4Pjf0Wy@cluster0.ynmkn3f.mongodb.net/recipes?retryWrites=true&w=majority&appName=Cluster0"
); // to connect our backend with our database

app.listen(3001, () => console.log("SERVER STARTED!")); // tells our API to start
