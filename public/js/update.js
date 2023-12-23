console.log("hello")

const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let months = month[d.getMonth()];
let day = weekday[d.getDay()];
document.getElementById("day").innerHTML=day;
document.getElementById("date").innerHTML=d.getDate();
document.getElementById("month").innerHTML=months;
setInterval(async()=>{
    const date=new Date();
    const hours=date.getHours();
    const min=date.getMinutes();
    const sec=date.getSeconds();
     document.getElementById("hrs").innerHTML=hours+":";
    document.getElementById("min").innerHTML=min+":";
    document.getElementById("sec").innerHTML=sec;
   
    }, 1000)

    const eventhandler=()=>{
        const id=document.getElementById("submit").value;
        console.log(id)
        const tittles=document.getElementById("tittle").value;
        console.log(tittles)
        const dep=document.getElementById("description").value;
        console.log(dep)
        option={
            method:"PUT",
           headers:{"Content-Type":"application/json"},
            body:JSON.stringify({
            tittle:tittles,
            des:dep
          })
        }
        fetch(`http://localhost:3000/api/users/id/${id}`,option)
        .then((reponse)=>console.log(reponse.status))
       }
    

