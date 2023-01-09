let arrhex=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','A','B','C','D','E','F']
let backcolor=document.getElementById("backcolor")
let background=document.getElementById("background")
let color="#ffff"
let click=document.getElementById("click")
let flex=document.querySelector(".flex")
backcolor.textContent=color
backcolor.style.color=color
let newcolor

let arr=["#7580a5","#36a7f4","#D6E2CF","#60EC5f","#CEC4bf"]

function Randomindex(){
    random=Math.floor(Math.random()*5)
    return random
}
click.addEventListener("click",function(){
    newcolor=arr[Randomindex()]
    console.log(newcolor)
    backcolor.textContent=newcolor
    backcolor.style.color=newcolor
    flex.style.backgroundColor=newcolor





    


})
