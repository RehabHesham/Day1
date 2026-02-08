let name = "ali";
let age = 20;

let user = { name, age };

/// using CommonJs Modules

/// default export
module.exports = function print(obj) {
  console.log(obj);
};

// named export
module.exports.print2 = function print(obj) {
  console.log(obj);
};
console.log(module);
