let express=require('express');

let app=express();
app.use(express.json()); //for parsing application/json

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