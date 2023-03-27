const ws = require("nodejs-websocket")
const Db = require('../db')
var PORT = 10011

var server = ws.createServer(function (conn) {

    console.log("New connection")
    conn.on("text", function (str) {
      Db.stringPutToDB(str)
    })
    conn.on("close", function (code, reason) {

        console.log("Connection closed")
    })

    conn.on("error", function(err){

        console.log("handle err");
        console.log(err);

    })

}).listen(PORT)
module.exports = ws;
