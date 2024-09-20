// Basic HTTP server using node js
// An HTTP server is a computer program that listens for incoming HTTP requests and responds to them with appropriate data. It's the foundation of web applications and services, acting as a middleman between clients (like web browsers) and web resources (HTML, CSS, JavaScript, images, etc.).   

// Key Functions of an HTTP Server:
// Listening: An HTTP server listens on a specific port (usually port 80 or 443) for incoming HTTP requests.   
// Request Parsing: When a client sends a request, the server parses it to extract information like the method (GET, POST, etc.), URL, headers, and body.
// Resource Retrieval: Based on the requested URL, the server locates the corresponding resource (e.g., a file, database entry, or dynamically generated content).
// Response Generation: The server constructs a response, including the status code (e.g., 200 OK, 404 Not Found), headers, and the requested content.   
// Sending Response: The server sends the response back to the client, completing the HTTP transaction.   
// Components of an HTTP Server:
// Request Handler: This is a function that processes incoming requests and determines the appropriate response.   
// Routing Mechanism: This component maps incoming URLs to specific request handlers.
// Resource Handling: This involves reading files, querying databases, or generating dynamic content based on the request.
// Response Generation: This involves creating the HTTP response with the correct status code, headers, and content.
// Common HTTP Methods:
// GET: Retrieves data from the server.   
// POST: Sends data to the server to create or update resources.   
// PUT: Updates an existing resource on the server.
// DELETE: Removes a resource from the server.   
// HEAD: Requests the HTTP headers of a resource without the body.   
// OPTIONS: Requests the available HTTP methods for a resource.   
// Popular Node.js HTTP Server Frameworks:
// Express.js: A minimalist and flexible framework for building web applications.   
// Koa.js: A smaller and more modular framework built on top of Koa.
// Hapi.js: A robust and enterprise-grade framework with many features.   
// In essence, an HTTP server is the bridge between clients and the resources they request on the web.

//  It plays a crucial role in enabling web applications and services to function effectively.   


const http = require('http'); //This module provides functions for creating HTTP servers.

const port = 3000; // declaring the port number which server will listen

// http.createServer() method creates a new HTTP server. The callback function takes two arguments: req (request object) and res
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');

  if (req.url === '/') {
    // Home page
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h1>Welcome to the website.....................!</h1>');
  } else if (req.url === '/about') {
    // About page
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end('<h2>About Us</h2><p>This is the about pageeeeeeeeeeeeeeeeeeeeeeeeee</p>');
  } else {
    // 404 Not Found
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1><p>The page you requested could not be found.</p>');
  }
});


// The server.listen() method starts the server listening on the specified port.
server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});