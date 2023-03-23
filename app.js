const http = require("http");
const { readFileSync } = require("fs");
const homePage = readFileSync("./public/template/index.html");
const homeStyle = readFileSync("./public/css/style.css");
const homeLogic = readFileSync("./public/js/index.js");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.write(homePage);
    res.end();
  }
  // styles
  else if (url === "/public/css/style.css") {
    res.writeHead(200, { "content-type": "text/css" });
    res.write(homeStyle);
    res.end();
  }
  // logic
  else if (url === "/public/js/index.js") {
    res.writeHead(200, { "content-type": "text/javascript" });
    res.write(homeLogic);
    res.end();
  }
  // 404
  else {
    res.writeHead(404, { "content-type": "text/html" });
    res.write("<h1>Page not Found</h1>");
    res.end();
  }
});

server.listen(5000);
