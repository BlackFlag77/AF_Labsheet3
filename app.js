console.log("app.js is running");

// Read file
const fs = require("fs");
fs.readFile("file.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});

// Write to file
const fs = require("fs");
fs.writeFile("file.txt", "Hello World!", function (err) {
  if (err) throw err;
  console.log("File saved!");
});

// Creating a web server
const http = require("http");
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Hello World!");
    res.end();
  })
  .listen(8080);

// Making an HTTP request
const https = require("https");
https
  .get("https://jsonplaceholder.typicode.com/posts/1", (resp) => {
    let data = "";
    resp.on("data", (chunk) => {
      data += chunk;
    });
    resp.on("end", () => {
      console.log(JSON.parse(data));
    });
  })
  .on("error", (err) => {
    console.log("Error: " + err.message);
  });

// Using a module
const myModule = require("./my-module.js");
console.log(myModule.myFunction());