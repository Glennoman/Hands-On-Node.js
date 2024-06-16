const express = require("express"); // Import Express.js
const path = require("path"); // Import path module for file and directory paths
const ejs = require("ejs");

// Creating express application
const app = express();

// Defining port number to listen to
const PORT = 3000;

// Set EJS as view engine
app.set("view engine", "ejs");

//Set directory for EJS templates
app.set("views", path.join(__dirname, "views"));

// Route for root URL "/"
app.get("/", (req, res) => {
  // Load index.ejs template and pass dynamic data
  res.render("index", {
    title: "Home Page",
    message: "Welcome to the Home Page",
    currentDate: new Date().toLocaleString(),
  });
});

// Route for "/about" URL
app.get("/about", (req, res) => {
  //Load "about.js" template and pass dynamic data
  res.render("about", {
    title: "About",
    message: "About Page",
    info: "This is a simple Node.js application using EJS for templates.",
  });
});

app.get("/contact", (res, req) => {
  res.render("contact", {
    title: "contact",
    contactMessage: "Feel free to reach out via de form below.",
  });
});

// Start server to specific port
app.listen(PORT, () => {
  console.log(`Server is running and listening to http://localhost:${PORT}`);
});
