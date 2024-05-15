let mongoose=require("mongoose")
let schobj=new mongoose.Schema({
    "_id":String,
    "name":String,
    "pwd":String,
    "gen":String,
    "phno":String
})
let usermodel=mongoose.model("user",schobj)
module.exports=usermodel