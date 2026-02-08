const { users } = require("../data.js");

module.exports.getAllUsers = (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  return res.end(JSON.stringify(users));
};

module.exports.createUser = (req, res) => {
  console.log("create user ... ");
  let body = "";
  req.on("data", (chunk) => {
    body += chunk;
  });
  req.on("end", () => {
    /// habdle create user
    console.log(body);
    let user = JSON.parse(body);
    console.log(users);
    users.push(user);
    res.writeHead(201, { "content-type": "application/json" });
    return res.end(
      JSON.stringify({
        message: "User Created",
        data: user,
      }),
    );
  });
};

module.exports.getUserByID = (req, res) => {
  // url     =>   /user/id/hdhdh
  const url = new URL(req.url, `http://${req.headers.host}`);
  console.log(url.pathname, req.url);
  const id = req.url.split("/")[2];
  console.log(id);
  const user = users.find((u) => u.id == id);
  res.writeHead(200, { "content-type": "application/json" });

  res.end(JSON.stringify(user));
};

module.exports.getUserByAge = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  console.log(url);
  const age = url.searchParams.get("age");
  console.log(age);
  const filteredUsers = users.filter((u) => u.age == age);
  res.writeHead(200, { "content-type": "application/json" });
  res.end(JSON.stringify(filteredUsers));
};
