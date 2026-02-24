let express=require('express');
const { dbConnection } = require('./dbConnection');
let app=express();

app.use(express.json());


app.get("/read",async (req,res)=>{
    let myDB=await dbConnection();
    let studentCollection=myDB.collection("students");
    let data= await studentCollection.find().toArray();
    let resobj={
        status:1,
        msg:"Student List retrieved successfully",
        data
    }
    res.send(resobj);
});


app.post("/create",async(req,res)=>{
    let myDB=await dbConnection();
    let studentCollection=myDB.collection("students");

    let obj={
        name:req.body.name,
        email:req.body.email,
    }

    let insertres=await studentCollection.insertOne(obj);

    let resobj={
        status:1,
        msg:"Data inserted successfully",
        insertres
    }
    res.send(resobj);
});

app.listen("3000");