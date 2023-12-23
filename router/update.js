const express=require("express");
const route=express.Router();
const bodyparser=require("body-parser")
const controller=require("../controller/controller");

route.use(bodyparser.urlencoded({ extended: false }));
route.get("/",controller.updatepage)
module.exports=route;