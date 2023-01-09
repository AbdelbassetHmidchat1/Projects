let arrhex=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','A','B','C','D','E','F']
let backcolor=document.getElementById("backcolor")
let background=document.getElementById("background")
let color="#ffff"
let click=document.getElementById("click")
let flex=document.querySelector(".flex")
backcolor.textContent=color
let arr=["#","a","b","c","d","e","f"]

function Randomindex(){
    random=Math.floor(Math.random()*arrhex.length)
    return random
}
click.addEventListener("click",function(){
    for (let i = 1; i < arr.length; i++) {
        arr[0]="#"
        arr[i]=arrhex[Randomindex()]
        
    }
    color=arr.toString().replace(/,/g,"")
    backcolor.textContent=color
    backcolor.style.color=color
    flex.style.backgroundColor=color





    


})
