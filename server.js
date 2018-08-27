var http = require("http");

var PORT1 = 7000;
var PORT2 = 7500;

function handleRequest1(request, response) {
    response.end("Nice server" + request.url);
}

function handleRequest2(request, response) {
    response.end("Bad server" + request.url);
}

var server1 = http.createServer(handleRequest1);
var server2 = http.createServer(handleRequest2);

server1.listen(PORT1, function () {
    console.log("You're awesome");
})
server2.listen(PORT2, function () {
    console.log("You're not awesome");
})