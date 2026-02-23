let http= require('http');

let server = http.createServer((req,res)=>{

    if(req.url=="/"){
        res.end("First Node Server");
    }
        else if(req.url=="/about"){ 
            res.end("About Us Page");
        }
        else if(req.url=="/contact"){
            res.end("Contact Us Page");
        }
        else if(req.url=="/news"){
            let obj={
                stutas:1,
                news:[
                    {
                        id:1,
                        title:"News 1"
                    },
                    {
                        id:2,
                        title:"News 2"
                    },
                ]
            }
            res.end(JSON.stringify(obj));
        }
})

server.listen("3000") //http://localhost:3000/