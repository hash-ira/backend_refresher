const http = require('http');
const myMod = require("./export_eg")

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        console.log(myMod.add(10 , 9));
        res.end("<h1> HEllo World </h1>")
    } else if (req.url == "/about") {
        res.end("<h1> About Me </h1>")
    }
})


server.listen(5000, () => {
    console.log("Server is uptime.")
})