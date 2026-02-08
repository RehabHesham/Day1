const { welcome } = require("./controllers/home.controller");
const {
  getAllUsers,
  createUser,
  getUserByID,
  getUserByAge,
} = require("./controllers/users.controller.js");
module.exports = (req, res) => {
  // read from request
  console.log(`request url: ${req.url}, method: ${req.method}`);

  console.log("Serevr is running..");
  // Routing
  if (req.url === "/" && req.method === "GET") {
    return welcome(req, res);
  } else if (req.url === "/users" && req.method === "GET") {
    return getAllUsers(req, res);
  } else if (req.url === "/users" && req.method === "POST") {
    return createUser(req, res);
  } else if (req.url.startsWith("/users/") && req.method == "GET") {
    return getUserByID(req, res);
  } else if (req.url.startsWith("/users?") && req.method == "GET") {
    return getUserByAge(req, res);
  }
  // write on response
  // not found handler
  res.statusCode = 404;
  res.setHeader("Content-Type", "application/json");
  res.write(JSON.stringify({ message: "endpoint not found" }));
  res.end();
};
