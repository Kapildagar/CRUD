const { default: axios } = require("axios");
const user=require("../models/todomodel");


exports.homeroute=(req,res)=>{
    
   axios.get("http://localhost:3000/api/users")
   .then((data)=>{
      console.log(data.data)
      res.render("home", {value:data.data});
   })
    
}

exports.updatepage=(req,res)=>{
   const vid=req.query.id;

   axios.get("http://localhost:3000/api/users/id",{params:{id:req.query.id}})
   .then((data)=>{
      console.log(data.data)
      res.render("update",{values:data.data});
   })
    
}


exports.create=(req,res)=>{
   if(!req.body){
       res.status(404).send("not data aviable")
   }
   const value= new user({tittle:req.body.tittle,
                               des:req.body.des})
 value.save(value).then((data)=>
    res.redirect("/")
 ).catch((err)=>{
    console.log(err);
 })
}

exports.find=(req,res)=>{
   user.find()
.then(
      (data)=>{
         res.send(data);
      })
      .catch((err)=>{
         console.log(err);
      })
 }

 exports.findbyid=(req,res)=>{
      console.log(req.query.id)
     user.findById(req.query.id)
     .then((data)=>{
      res.send(data)
     }).catch((err)=>{
      res.send(err)
     })
     
 }

 exports.update=(req,res)=>{
   console.log(req.params.vid)
   console.log(req.body)
   console.log("run")
   user.findByIdAndUpdate(req.params.vid,req.body,{useFindAndModify:false},)
   .then((data)=>{
      console.log(data)
      console.log("run1")
   })
   .catch((err)=>{
      res.send(err);
   })
 }
 exports.delet=(req,res)=>{

   user.findByIdAndDelete(req.params.vid)
   .then(()=>{
      res.send("value deleted sucessfull")
   })
   .catch((err)=>{
      res.send("err")
   })
 }