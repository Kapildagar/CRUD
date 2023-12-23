const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb://127.0.0.1:27017/todo")
                          .then(()=>{
                            console.log(`connected to datbase`)
                          })
                          .catch((err)=>{
                            console.log(err);
                          })

module.exports=connection;