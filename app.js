const http = require('http');

const server = http.createServer(function(request, response) {
  console.log(request.url);
  
  
  if(request.url === "/") {
    let doc = `<html> <head> </head> <body> <h1> main </h1>  </body> </html>`
    response.writeHead(200, {"Content-Type":"text/html"});
    response.end(doc);
  }
 
 
 
  if(request.url === "/pingulee") {
    let doc = `<html> <head> </head> <body> <h1> pingulee </h1>  </body> </html>`
    response.writeHead(200, {"Content-Type":"text/html"});
    response.end(doc);
  }




});

server.listen(1234);