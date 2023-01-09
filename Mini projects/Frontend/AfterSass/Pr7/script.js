let grid=document.getElementById("grid")
let grid2=document.getElementById("grid2")
let grid3=document.getElementById("grid3")
let btn1=document.getElementById("btn1")
let btn2=document.getElementById("btn2")
let btn3=document.getElementById("btn3")
let flex=document.querySelectorAll(".flex")
window.addEventListener("DOMContentLoaded",function disappear(){
    grid2.style.display="none"
    grid3.style.display="none"

})
btn1.addEventListener("click",function breakfast(){
    grid.style.display="grid"
    grid2.style.display="none"
    grid3.style.display="none"

})
btn2.addEventListener("click",function Lunch(){
    grid2.style.display="grid"
    grid.style.display="none"
    grid3.style.display="none"

})
btn3.addEventListener("click",function shakes(){
    grid3.style.display="grid"
    grid.style.display="none"
    grid2.style.display="none"

})