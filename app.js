const express = require('express');
const fs = require('fs')

const app = express();
const port = process.env.PORT || 5000;

var RateLimiter = require('express-rate-limit');
var Limiter = RateLimiter({
    windowMs: 900,
    Max: 20
})

app.use(Limiter)

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => console.log('listening on port ${port}'))

app.use(express.static(__dirname));

app.use(function(req, res, next){
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; connect-src 'self'"
    );
    next;
})

const Content = "content"
fs.appendFile("./test.txt", Content + "\n", err =>{
    if(err){
        console.error(err)
    }
    console.log("file saved succesfully")

})