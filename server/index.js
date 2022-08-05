const express = require("express")
const cors = require("cors")
const morgan = require("morgan")

//create app
const app = express()

//middleware
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
const country = require("./routes/api/country")
app.use("/api/country", country)

const bookmark = require("./routes/api/bookmark")
app.use("/api/bookmark", bookmark)

//Production Environment Setup
if(process.env.NODE_ENV === "production"){
    //static files
    app.use(express.static(__dirname+ "/public/"))
    //SPA
    app.get(/.*/, (req,res)=>res.sendFile(__dirname+"/public/index.html"))
}

const port = process.env.PORT || 5000
app.listen(port, ()=>{
    console.log(`Listening for requests on port:${port}`)
})