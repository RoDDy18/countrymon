const mongoose = require("mongoose")

const Schema = mongoose.Schema

const bookmarkSchema = new Schema({
    countryImg:{
        type:String,
        required:true
    },
    countryName:{
        type:String,
        required:true
    },
    independent:{
        type:Boolean,
        required:true
    },
    countryLanguage:{
        type:String,
        required:true
    },
    countryCurrency:{
        type:String,
        required:true
    },
    countryContinent:{
        type:String,
        required:true
    },
    countryRegion:{
        type:String,
        required:true
    },
    countrySubregion:{
        type:String,
        required:true
    },
    countryPopulation:{
        type:Number,
        required:true
    },
    countryTimezone:{
        type:String,
        required:true
    }
})

const saveCountry = mongoose.model("bookmark", bookmarkSchema)

module.exports = saveCountry