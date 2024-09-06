const express= require("express")

const router= express.Router()

router.get("/",(req,res)=>{
    res.json({
        id:2,
        name: "samfresh09",
        job: "developper"
    })
})

module.exports= router;

