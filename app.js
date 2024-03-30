const express = require("express");
const schema = require("./schema.js");
const db = require("./db.js");

const app = express();
app.use(express.json())
app.set('view engine','ejs');


app.delete("/delete",async (req,res) =>{
    const {size, color , material} = req.body;
    if(!size || !color || !material){
        res.json({error:"size,colorand material are required"});
    } 
    try{
        const deleteElement = await schema.deleteMany({size,color,material});
        console.log(deleteElement);
        res.json({message:"deleted successfully"});
    } catch(error){
        res.json("error: "+ error);
    }
})

app.get("/", async(req,res)=>{
    try{
        const variants = await schema.find();
        res.render("index",{variants:variants});
    } catch(error){
        res.send("error: "+error);
    }

})

app.post("/",async (req,res)=>{
    const variants = await schema({
        size : req.body.size,
        color : req.body.color,
        material : req.body.material
    })
    try{
        const v1 = await variants.save();
        res.json(v1);
    }catch(error){
        res.send("error: "+error);
    }
})


app.listen(5555,()=>{
    console.log("listening on port 5555!");
});

