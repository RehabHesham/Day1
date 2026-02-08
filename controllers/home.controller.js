

module.exports.welcome = (req, res)=>{
 res.writeHead(200, { "Content-Type": "application/json" });
 return res.end(JSON.stringify({ message: "Welcome in our api." }));
};