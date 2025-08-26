const express = require("express");
const path = require("path");

const app = express();

// View Engine Setup
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static files (like CSS, images)
app.use(express.static(path.join(__dirname, "public")));

// Routes
const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);

// Start server
app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
