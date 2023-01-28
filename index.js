const express = require("express");
const fs = require("fs");
const { connection } = require("./config/db");
const cors = require("cors");
const { Questionmodel } = require("./models/question.model");
 const { Quizdatavcontroller } = require("./controllers/questions.controller");
const app = express();
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("welcome to home page");
});
app.get("/quiz", Quizdatavcontroller);
const data = JSON.parse(fs.readFileSync("./db.json", "utf-8"));

const uploadData = async () => {
  await Questionmodel.create(data);
  console.log("data imported");
  process.exit();
};
//uploadData();

app.listen(8787, async () => {
  try {
    await connection;
    console.log("connection established");
  } catch (err) {
    console.log(err);
  }
  console.log("server started on port 8787");
});
