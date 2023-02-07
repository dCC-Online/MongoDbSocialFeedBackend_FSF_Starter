require("dotenv").config();
const express = require("express");
const app = express();
const posts = require("./routes/posts");
const connectDb = require("./db/db");

connectDb();

// TODO: npm install
// TODO: Create a .env file in the root of the project and add your connection string for MongoDb
// TODO: Install Mongoose and Joi packages (npm install mongoose joi)

app.use(express.json());
app.use("/api/posts", posts);

const port = process.env.PORT || 5500;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
