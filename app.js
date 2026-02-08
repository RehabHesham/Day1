const http = require("http");

const users = [
  { id: 1, name: "ali", age: 20 },
  { id: 2, name: "ola", age: 15 },
];

const server = http.createServer((req, res) => {
  // read from request
  console.log(`request url: ${req.url}, method: ${req.method}`);

  console.log("Serevr is running..");
  // Routing
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify({ message: "Welcome in our api." }));
  } else if (req.url === "/users" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(users));
  } else if (req.url === "/users" && req.method === "POST") {
  }
  // write on response
  // not found handler
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify({ message: "endpoint not found" }));
  res.end();
});

const PORT = "3000";
server.listen(PORT);
