const express = require("express");
const StatusUpdateRoute = require("./api/statusUpdate");
const OwnerRoute = require("./api/owner");
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const path = require("path");

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/owner", OwnerRoute);
app.use("/api/statusUpdate", StatusUpdateRoute);

app.use(express.static(path.join(__dirname, "build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

let mongoEndpoint =
  process.env.MONGOD_URI || "mongodb://127.0.0.1/collection_name";
if (process.env.MONGO) {
  mongoEndpoint = process.env.MONGO;
}
mongoose.connect(mongoEndpoint, { useNewUrlParser: true });

const database = mongoose.connection;
database.on(
  "error",
  console.error.bind(console, "Error connecting to MongoDB:")
);

app.listen(process.env.PORT || 8000, () => {
  console.log("Starting server...");
});
