const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  fs.readFile("./public/index.html", (err, data) => {
    res.writeHead(200, {
      "Content-type": "text/html",
    });
    res.write(data);
    res.end();
  });
});

server.listen(3001, () => {
  console.log("Server is running");
});
