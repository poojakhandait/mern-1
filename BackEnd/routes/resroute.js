let express=require("express")
const {adduse,login,getdet,about,addcom,islogin } = require("../controller/rescont")
let route=new express.Router()
route.post("/add",adduse)
route.post("/login",login)
route.get("/getuser/:_id",islogin,getdet)
route.get("/about",islogin,about)
route.post("/addcom",islogin,addcom)
module.exports=route