
const express=require("express");
const app=express();
const port=process.env.PORT || 3000;
const mongocon=require("./bdconn/bdconn");
const path=require("path");
app.set("view engine","ejs");
const homeroute=require("./router/home")
const updatepage=require("./router/update")
app.use(("/js"),express.static(path.resolve(__dirname,("public/js"))))
app.use(("/css"),express.static(path.resolve(__dirname,("public/css"))))
app.use("/",homeroute)
app.use("/update",updatepage);

mongocon;



app.listen(port,()=>{
    console.log(`listen on ${port}`)
})