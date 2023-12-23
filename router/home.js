const express=require("express");
const route=express.Router();
const bodyparser=require("body-parser")
const controller=require("../controller/controller");

route.use(bodyparser.urlencoded({ extended: false }));
route.get("/",controller.homeroute)
route.post("/api/users",controller.create)
route.get("/api/users",controller.find)
route.get("/api/users/id",controller.findbyid)
route.put("/api/users/id/:vid",controller.update)
route.delete("/api/users/id/:vid",controller.delet)


module.exports=route;