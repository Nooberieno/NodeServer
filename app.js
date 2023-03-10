import * as http from 'http'
import * as fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { response } from 'express'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const port = process.env.PORT || 4675
const Content = "Content"

function addtofile(){
    {fs.appendFile("./test.txt", Content + "\n", err =>{
    if(err){
        console.error(err)
    }
    console.log("file saved succesfully")

})
}
}

const server = http.createServer(async(req, res)=>{
    if (req.url == "/file" && req.methode == "GET"){
        res.setHeader(
            'Content-Security-Policy',
            "default-src 'self'; connect-src 'self'"
        );
        addtofile()
        res.end
    }

    else{
        fs.readFile(__dirname + "/index.html", function(err, html){
            if (err) throw err;
            res.setHeader(
                'Content-Security-Policy',
                "default-src 'self'; connect-src 'self'"
            )
            res.writeHead(200, {"Content-Type": "text/html"})
            res.write(html)
            res.end
        })

    }
}
)

server.listen(port, () =>{
    console.log("server running")
}
)
