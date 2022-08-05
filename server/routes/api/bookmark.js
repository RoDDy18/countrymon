const express = require("express")
const mongoose = require("mongoose")
const saveCountry = require("../../models/bookmark_model")

const router = express.Router()
const dbURI1 = "mongodb://localhost:27017/countrymon"

const username = encodeURIComponent("RoDDy22")
const password = encodeURIComponent("P5VOGOihhrxMljav")
const dbURI = `mongodb+srv://${username}:${password}@countrymon.3qfdo3m.mongodb.net/?retryWrites=true&w=majority`

const conn = async ()=>{
    await mongoose.connect(dbURI).then(()=>console.log("Connected to DB")).catch(err=>console.error(err))
}

conn()

router.get("/", async (req,res)=>{
    
    await saveCountry.find().then((result)=>{
        res.send(result)
    }).catch(err=>console.error(err))
})

router.post("/", async (req,res)=>{
    const post = new saveCountry(req.body)
    await post.save().then(()=>{
        console.log("Country Bookmarked")
    }).catch(err=>console.error(err))
    res.status(200).send()
})

router.delete("/:id", async (req,res)=>{
    const id = req.params.id
    await saveCountry.deleteOne({_id:id}).then(()=>{
        console.log("Country Bookmark Deleted")
    }).catch(err=>console.error(err))
    res.status(200).send()
})

module.exports = router