let express=require('express');

let app=express();
app.use(express.json()); //for parsing application/json

let myToken="12345";
let myPass="12345";

let checkToken=(req, res, next)=>{
    if(req.query.token=="" || req.query.token==undefined){
        return res.send({
            status:0,
            msg:"Token is required. Please provide token in query parameter"
        })
    } 
    else if(req.query.token!=myToken){
            return res.send({
                status:0,
                msg:"Invalid token. Please provide valid token"
            })
        }
        next();
    }

app.use(checkToken); //global middleware or Application level middleware


app.use((req, res, next)=>{
    if(req.query.pass=="" || req.query.pass==undefined){
        return res.send({
            status:0,
            msg:"Password is required. Please provide password in query parameter"
        })
    } 
    else if(req.query.pass!=myPass){
            return res.send({
                status:0,
                msg:"Invalid password. Please provide valid password"
            })
        }
        next();
})

app.get('/',(req, res)=>{
    res.send('Home Page API');
})

app.get('/news',(req, res)=>{
    res.send(
        {
            status:1, 
            msg:"News API"
        }
    );
})

app.get('/products',(req, res)=>{
    res.send(
        {
            status:1, 
            msg:"Products API"
        }
    );
})


app.post('/login',(req, res)=>{
    console.log(req.body);  // for debugging purpose

    res.status(200).send(
        {
            status:1,
            msg:"Login API",
            bodyData:req.body,
            queryData:req.query
        }
    );
    // res.send(
    //     {
    //         status:1, 
    //         msg:"Login API",
    //         bodyData:req.body,
    //         queryData:req.query
    //     }
    // );
})

app.get('/news/:id',(req, res)=>{
    let currentNewsId=req.params.id;
    res.send("News Details API"+currentNewsId);
})


app.listen("3000"); //http://localhost:3000/