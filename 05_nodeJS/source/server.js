const http = require("http");

const hostname = "127.0.0.1";

const port = 8080;

const server = http.createServer((req, res) => { 
    res.statusCode = 200;
    res.setHeader("Content-type", "text/plain");
    res.end("Vizsga szerver");
});

server.listen(port, hostname, () => {
    console.log(`A szerver működik a http://${hostname}:${port}/ címen`);
});