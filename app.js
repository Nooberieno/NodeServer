import express from 'express';
import rateLimit from 'express-rate-limit';
import path from 'path';
import { fileURLToPath } from 'url';
import * as fs from 'fs'

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
})

app.listen(port, () => console.log('listening on port 4675'))

app.use(express.static(path.join(__dirname)));

app.use(function(req, res, next){
    res.setHeader(
        'Content-Security-Policy',
        "default-src 'self'; connect-src 'self'"
    );
    next;
})

const Content = "content"
function addToFile(){fs.appendFile("./test.txt", Content + "\n", err =>{
    if(err){
        console.error(err)
    }
    console.log("file saved succesfully")

})
}

app.get('/addToFile', (req, res) =>{
    addToFile();
    res.send('Succes');
})