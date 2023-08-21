import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
let tasks = [];
let bucketItems = [];

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.post("/", (req, res) => {
  const newTask = req.body["task"];
  tasks.push(newTask);
  res.render("index.ejs", { allTasks: tasks});
});

app.get("/bucket-list", (req, res) => {
  res.render("bucket-list.ejs");
});

app.post("/bucket-list", (req, res) => {
  const bucketItem = req.body["item"];
  bucketItems.push(bucketItem);
  res.render("bucket-list.ejs", { allBucketItems: bucketItems});
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
