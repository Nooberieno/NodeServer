const express = require('express');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 5000;

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.listen(port, () => console.log('listening on port ${port}'))

app.use(express.static(__dirname));
