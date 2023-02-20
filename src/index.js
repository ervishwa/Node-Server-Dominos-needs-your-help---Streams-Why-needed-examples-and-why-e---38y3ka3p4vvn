var http = require("http");

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
    if (req.url == '/welcome') {
           res.write("Welcome to Dominos!");
}else if(req.url == '/contact'){
    res.write(JSON.stringify({ 
        phone: '18602100000', 
        email: 'guestcaredominos@jublfood.com' 
      }));  
    res.end(); 
}else{
    res.end("status 404");
}
}

httpServer.listen(8081);
console.log('Node.js web server at port 5000 is running..')

module.exports = httpServer;