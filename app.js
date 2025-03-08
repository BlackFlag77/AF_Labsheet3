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

// Promises
const myPromise = new Promise((resolve, reject) => {
  if (condition) {
    resolve("Success!");
  } else {
    reject("Failure!");
  }
});
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

// Async/Await
async function myFunction() {
  try {
    const result = await myPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
myFunction();

// Git Collaboration
// 1. Now pair up with a colleague (preferably sitting next to you) and add them to your repository as
// a collaborator by referring to this documentation.
// 2. Now clone their repository to your computer.
// 3. Then as with step 1, create a branch and introduce a small change.
// 4. Push the branch to the remote repository.
// 5. Use the GitHub official documentation to create a Pull Request on Github for your branch.
// Then merge the pull request created by your friend to the main by referring to this official
// documentation.