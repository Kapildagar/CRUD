const mongoose=require("mongoose");
const schemma=require("./schemma")

const User=mongoose.model("User",schemma);

module.exports=User