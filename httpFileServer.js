// Importing modules
const http = require("http");
const fs = require("fs");
const path = require("path");

// Defining port number to listen to
const PORT = 3000;

// HTTP server using http module
const server = http.createServer((req, res) => {
  // initializing variable to store file path requested file
  let filePath = "";

  // Content type to be sent in response header
  let contentType = "text/html";

  // Determine which file to serve based on the URL.
  // The req.url property contains the URL path requested by the client
  switch (req.url) {
    // If the root URL '/' is requested, serve 'index.html'
    case "/":
      filePath = path.join(__dirname, "index.html");
      break;
    case "/about":
      filePath = path.join(__dirname, "about.html");
      break;
    case "/contact":
      filePath = path.join(__dirname, "contact.html");
      break;

    // Any other URL, filepath set to null to indicate 404 Not Foudn error
    default:
      filePath = null;
  }

  // If filePath is not null => we have valid file
  if (filePath) {
    fs.readFile(filePath, (err, content) => {
      if (err) {
        // If error occurs while reading file send 500 Internal Server Error response
        res.writeHead(500, { "Content-Type": "text/plain" }); // response status 500
        res.end("500 Internal Server Error"); // Send error message as response
      } else {
        // If file read succesfully send 200 OK respons with file content
        res.writeHead(200, { "Content-Type": contentType }); // Set response status to 200 and content type to HTML
        res.end(content, "utf8"); //Send the content of the file as the response
      }
    });
  } else {
    // if filePath is null means requested URL doesn't match routes
    res.writeHead(404, { "Content-Type": "text/plain" }); // Response status 404
    res.end("404 Not Found"); // Send 404 message response
  }
});

// Starting server to specific port. listen method takes port number and
// callback function to execute once server is listening
server.listen(PORT, () => {
  console.log(`Server is running and listening to http://localhost:${PORT}`);
});
