const express = require("express");
const schema = require("./schema.js");
const db = require("./db.js");

const app = express();
app.use(express.json())
app.set('view engine','ejs');


app.delete("/:ID", async (req, res) => {
    try {
        const deleteElement = await schema.findByIdAndDelete(req.params.ID);
        if (!deleteElement) {
            res.send("Variant not found. Check again.");
        } else {
            res.send("Variant deleted successfully.");
        }
    } catch (error) {
        res.send("Error: " + error);
    }
});

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

