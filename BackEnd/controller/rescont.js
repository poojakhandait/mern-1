
let usermodel=require("../model/resmodel")
let bcrypt=require("bcrypt")
let jwt=require("jsonwebtoken")
let  adduse=async(req,res)=>{
    try{
        let obj=await usermodel.findById({"_id":req.body._id})
        if(obj){
            res.json({"err":"account exists with given mail"})
        }
        else{
            let hashcode=await bcrypt.hash(req.body.pwd,10)
            let data=new usermodel({...req.body,"pwd":hashcode})
            await data.save()
            res.json({"msg":"registration done"})
        }
    }
    catch(err)
    {
        console.log(err)
    }

}
let login=async(req,res)=>{
    try{
        let obj=await usermodel.findById({"_id":req.body._id})
        if(obj)
        {
            let f=await bcrypt.compare(req.body.pwd,obj.pwd)
            if(f)
            {
                    res.json({"token":jwt.sign({"_id":obj._id},"abcd"),"name":obj.name,'_id':obj._id})
            }
            else{
                    res.json({"err":"check pwd"})
            }

       }
       else{
        res.json({"err":"check email"})
       }

    }
    catch(err)
    {

    }
}
let getdet=async(req,res)=>{
    try{
        let obj=await usermodel.findById({"_id":req.params._id})
        res.json(obj)
    }
    catch(err)
    {
        console.log(err)
    }
}
let about=(req,res)=>{
    res.json({"msg":"Hii User"})
}
let addcom=(req,res)=>{
    res.json({"msg":"Thank you for login  "})
}
let islogin=(req,res,next)=>{
    try{
        jwt.verify(req.headers.authorization,"abcd")
        next()
    }
    catch(err)
    {
        
        res.json({"err":"plz login"})
    }
}
module.exports={adduse,login,about,addcom,getdet,islogin}
