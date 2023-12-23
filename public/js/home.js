

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

    // let btn=document.getElementById("submit");
    // btn.addEventListener("click",()=>{
    //     option={
    //         method:"put",
    //         Headers:{"content-Type":'application/json'},
    //         body:JSON.stringify({tittle:'tittle',des:'des'})
    //     }
    //     fetch("http://localhost:3000/api/users/id/648a971573ce08ab8d7f01ba",option)
    //     .then((reponse)=>reponse.json())
    //     .then((data)=>console.log(data));
    // })

    const delet=()=>{
        console.log("delete")
        option={
            method:"DELETE"
        }
        const id=document.getElementById("delete").value;
        fetch("http://localhost:3000/api/users/id/"+id,option)
        .then(()=>{window.location.reload()});
    }

