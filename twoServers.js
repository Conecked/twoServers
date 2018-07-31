const http = require("http");

let PORTONE = 7000;

let PORTTWO = 7500;

function handleRequestOne(request, response) {
    
    // tells them something good about themselves
    response.end("Your good enough, your smart enough and gosh darn it people like you!" + request.url);
}

function handleRequestTwo(request, response) {
    // tells them something bad about themselves
    response.end("You smell funny...jus' sayin..." + request.url);
}

let serverOne = http.createServer(handleRequestOne);

let serverTwo = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
serverOne.listen(PORTONE, function() {
    // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORTONE);
})

serverTwo.listen(PORTTWO, function() {
    console.log("Server listening on: http://localhost:" + PORTTWO);
})
