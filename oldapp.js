import express from 'express';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs'
import url from 'url'
const http = require("http")

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express();
const port = process.env.PORT || 4675;

var Limiter = rateLimit({
    windowMs: 1,
    Max: 5
})

app.use(Limiter)

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")

    var url_parts = url.parse(req.url, true)
    var query = url_parts.query
    
    if (req.method !== 'GET'){
        switch(url_parts.pathname){
            case "/123" :
            addToFile()
            res.end
            break

        }
    }
})

app.listen(port, () => console.log('listening on port 4675'))

app.use(express.static(path.join(__dirname)));
app.use(express.urlencoded({extended: true}));

app.use(function(req, res, next){
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; connect-src 'self'"
    );
    next;
})

const Content = "content"
function addToFile()
{fs.appendFile("./test.txt", Content + "\n", err =>{
    if(err){
        console.error(err)
    }
    console.log("file saved succesfully")

})
}

app.get("/addToFile", (req, res) =>{
    addToFile();
    res.send('Succes');
})

app.get("/Testing", (req, res)=>{
    console.log("Succes")
    res.send("succes")
})