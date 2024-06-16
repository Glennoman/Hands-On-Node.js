// Importing modules
const http = require("http");

// Define port number for server
const PORT = 3000;

// HTTP server using http module
const server = http.createServer((req, res) => {
  // Content type and default status
  res.setHeader("Content-Type", "text/plain");
  res.statusCode = 200;

  // Handling diff routes
  switch (req.url) {
    case "/":
      res.end("hello, World!");
      break;
    case "/about":
      res.end("About us");
      break;
    case "/contact":
      res.end("Contact us");
      break;
    default:
      res.statusCode = 404;
      res.end("404 Not Found");
  }
});

// Starting server for specific port
server.listen(PORT, () => {
  console.log(`Server is running and listening to http://localhost:${PORT}`);
});
