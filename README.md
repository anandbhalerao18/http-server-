
**Title:** Simple Node.js HTTP Server with Routing and Error Handling

**Description:**

This repository provides a basic Node.js HTTP server with the following capabilities:

- **Routing:** Handles requests to different URLs (`/` for home, `/about` for about page).
- **Error Handling:** Provides a user-friendly 404 Not Found response for non-existent URLs.
- **Customizable Content:** Easily modify the home and about page content by editing HTML strings in the code.

**Getting Started**

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. **Install Dependencies:**

   No additional dependencies are required for this basic server.

3. **Run the Server:**

   ```bash
   node server.js
   ```

4. **Access the Server:**

   Open a web browser and visit:

   - `http://localhost:3000` for the home page.
   - `http://localhost:3000/about` for the about page.

**Code Explanation:**

**1. Imports:**

   - `const http = require('http');`: Imports the `http` module from Node.js, which provides functions for creating HTTP servers.

**2. Port Configuration:**

   - `const port = 3000;`: Defines the port number on which the server will listen. By default, most web servers use port 80, but for development purposes, using a different port like 3000 avoids conflicts with other running web applications on your system.

**3. Creating the Server:**

   - `const server = http.createServer((req, res) => { ... });`: Creates an HTTP server using the `http.createServer()` method. The callback function (`(req, res) => { ... }`) is called for every incoming HTTP request.
     - `req`: The `req` (request) object contains information about the incoming request, such as the request method (GET, POST, etc.), URL, headers, and body (if applicable).
     - `res`: The `res` (response) object is used to send a response back to the client. It provides methods for setting headers, status codes, and sending the response body.

**4. Setting Content Type Header:**

   - `res.setHeader('Content-Type', 'text/html');`: Sets the content type header of the response to `text/html`. This informs the client that the response body contains HTML content.

**5. Routing and Handling Requests:**

   - `if (req.url === '/') { ... }`: Checks if the requested URL is the root path (`/`).
     - If true, the server sends the home page content: `<h1>Welcome to the website.....................!</h1>`
   - `else if (req.url === '/about') { ... }`: Checks if the requested URL is `/about`.
     - If true, the server sends the about page content: `<h2>About Us</h2><p>This is the about pageeeeeeeeeeeeeeeeeeeeeeeeee</p>`
   - `else { ... }`: If the requested URL doesn't match any specific route, the server sends a 404 Not Found response.
      - `res.writeHead(404, { 'Content-Type': 'text/html' });`: Sets the response status code to 404 and content type to `text/html`.
      - `res.end('<h1>404 Not Found</h1><p>The page you requested could not be found.</p>');`: Sends the 404 error message with a user-friendly explanation.

**6. Starting the Server:**

   - `server.listen(port, () => { ... });`: Starts the server listening on the specified port and logs a message to the console when the server starts successfully.

**Customization:**

- To customize the home and about page content, modify the HTML strings within the `res.end()` methods for the respective `if` and `else if` blocks.

**Conclusion:**

This code provides a basic foundation for building a Node.js HTTP server with routing and error handling. You can expand on this code to create more complex web applications by adding features like:

- Additional routes for handling different functionalities.
- Dynamic content generation based on user input or server-side data.
- Database interaction for persisting data.
- Authentication and authorization mechanisms.

By understanding the concepts in this code and exploring the rich ecosystem of Node.js libraries and frameworks, you can build robust web applications that meet your specific requirements.

#   h t t p - s e r v e r - 
 
 
