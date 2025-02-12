/*let nav = document.querySelector("nav");
nav.getElementsByTagName("li")[0].style.color = "red"

let ch = document.querySelector(".c");

// Change color of first child
ch.firstElementChild.style.color = "green";

// Change color of last child
ch.lastElementChild.style.color = "green";*/


let user=prompt("enter no.between S ,W or G");
let cpuInput=Math.floor((Math.random()*3));
let cpu=["S","W","G"][cpuInput];
const match=(user,cpu)=>{
  if(user===cpu)
    console.log("match is tied");
  else if(user==="S"&& cpu==="W")
  {
    return "user";
  }else if(user==="S"&& cpu==="G")
  {
    return "cpu";
  }
   else if(user==="W"&& cpu==="S")
  {
    return "cpu";
  }else if(user==="W"&& cpu==="G")
  {
    return "user";
  }
  else if(user==="G"&& cpu==="S")
  {
    return "user";
  }
  else if(user==="G"&& cpu==="W")
  {
    return "cpu";
  }
}
let res=match(user,cpu);
document.write(`cpu:${cpu} <br>and user:${user}<br> the winner is ${res}``)
                 
  

              




/*let ch=document.getElementsByClassName("c")

console.log(ch.firstElementChild)
console.log(ch.lastElementChild)*/
