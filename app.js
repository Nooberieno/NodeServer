const express = require('express');

const app = express();
const port = process.env.PORT || 5000;

var RateLimiter = require('express-rate-limit');
var Limiter = new RateLimiter({
    windowMs: 1*60*1000,
    Max: 5
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
        "connect-src 'self'"
    );
    next;
})

