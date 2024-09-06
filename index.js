const express= require("express")
const mysql= require("mysql")

const port= process.env.port|| 5000

const app= express();

app.get("/", (req,res)=>{
    res.json({
        id:1,
        name:"expressJS",
        type:"nodeJS"
    })
});

const users= require("./routes/users")
app.use("/users", users)


app.listen(port,()=>{
    console.log("serveur en ligne!")
})



