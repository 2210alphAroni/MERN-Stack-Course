let express = require('express');
const { dbConnection } = require('./dbConnection');
const { ObjectId } = require('mongodb');
let app = express();

app.use(express.json());


app.get("/read", async (req, res) => {
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students");
    let data = await studentCollection.find().toArray();
    let resobj = {
        status: 1,
        msg: "Student List retrieved successfully",
        data
    }
    res.send(resobj);
});


app.post("/create", async (req, res) => {
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students");

    let obj = {
        name: req.body.name,
        email: req.body.email,
    }


    let existingUser = await studentCollection.findOne({ email:obj.email});

    if(existingUser){
        return res.send({
            status: 0,
            msg: "User with this email already exists"
        });
    }

    let insertres = await studentCollection.insertOne(obj);

    let resobj = {
        status: 1,
        msg: "Data inserted successfully",
        insertres
    }
    res.send(resobj);
});

app.delete("/delete/:id", async (req, res) => {
    let { id } = req.params;
    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students");
    let deleteRes = await studentCollection.deleteOne({ _id: new ObjectId(id) });
    let resobj = {
        status: 1,
        msg: "Data deleted successfully",
        deleteRes
    }
    res.send(resobj);
})


app.put("/update/:id", async (req, res) => {
    let { id } = req.params;
    let { name, email } = req.body;

    let obj={};

    if(name!="" && name!=undefined && name!=null){
        obj['name']=name;
    }

     if(email!="" && email!=undefined && email!=null){
        obj['email']=email;
    }

    let myDB = await dbConnection();
    let studentCollection = myDB.collection("students");
    let updateRes = await studentCollection.updateOne({ _id: new ObjectId(id) }, { $set: obj });
    let resobj = {
        status: 1,
        msg: "Data updated successfully",
        updateRes
    }
    res.send(resobj);

})

app.listen("3000");