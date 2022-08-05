const express = require("express")
const paginate = require("express-paginate")
const fetch = require("node-fetch")


const router = express.Router()

router.get("/", async (req,res)=>{
    try{
        const fetchAll = await fetch("https://restcountries.com/v3.1/all")
        const result = await fetchAll.json()
        res.send(result)
        /* return result.map(country=>({
            ...country
        })) */
    }catch(err){
        console.error(err)
    }
   
})

router.get("/:name", async (req,res)=>{
    try{
        const name = req.params.name
        const fetchAll = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
        const result = await fetchAll.json()
        res.send(result)
       /*  return result.map(country=>({
            ...country
        })) */
    }catch(err){
        console.error(err)
    }
    
})

router.get("/currency/:currency", async (req,res)=>{
    try{
        const currency = req.params.currency
        const fetchAll = await fetch(`https://restcountries.com/v3.1/currency/${currency}?fullText=true`)
        const result = await fetchAll.json()
        res.send(result)
        /* return result.map(country=>({
            ...country
        })) */
    }catch(err){
        console.error(err)
    }
    
    
})

router.get("/lang/:lang", async (req,res)=>{
    try{
        const lang = req.params.lang
        const fetchAll = await fetch(`https://restcountries.com/v3.1/lang/${lang}?fullText=true`)
        const result = await fetchAll.json()
        res.send(result)
       /*  return result.map(country=>({
            ...country
        })) */
    }catch(err){
        console.error(err)
    }
    
    
})
module.exports = router