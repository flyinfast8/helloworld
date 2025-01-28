//ec2-54-226-148-19.compute-1.amazonaws.com
const http = require("http");

const hostname = '0.0.0.0';  // Allows access from any host
const port = 3333;

http.createServer((request, response) => {
  // Send the HTTP header
  // HTTP Status: 200 : OK
  // Content Type: text/plain
  response.writeHead(200, { 'Content-Type': 'text/plain' });

  // Send the response body as "Hello World"
  response.end('I got this assignment working, yeah!\n');

  // Error handling example
  request.on('error', (err) => {
    console.error('Request Error:', err);
  });

  response.on('error', (err) => {
    console.error('Response Error:', err);
  });
}).listen(port, hostname, () => {
  // Console will print the message
  console.log(`Server running at http://${hostname}:${port}/`);
});
