var server = require("static-server");

var myServer = new server({
    
    port:3000,
    rootPath: './public'
    
});

myServer.start(function(){
    console.log("server start ho gya je");
})