const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url == "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(
      "<h1> This is my tutorial NodeJS in if condition </h1> <p> Hello world</p>"
    );
  } else if (req.url == "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");
    res.end(
      "<h1> This is my tutorial NodeJS in else if</h1> <p> Hello world</p>"
    );
  } else if (req.url == "/hello") {
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else {
    res.statusCode = 400;
    res.end("<h1>Error Occoured </h1> <p> No Page Found</p>");
  }
});

server.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
