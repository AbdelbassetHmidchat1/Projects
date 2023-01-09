let closeEl=document.getElementById("close")
let openEl=document.getElementById("open")
let show=document.querySelector(".box")
let list=show.classList
let container2=document.querySelector(".container2")
window.addEventListener("DOMContentLoaded",function remove(){
    list.remove("show")

})
openEl.addEventListener("click",function show(){
    if(!list.contains("show")){
        list.add("show")
        container2.style.visibility="visible"

    }
})
closeEl.addEventListener("click",function close(){
    if(list.contains("show")){
        list.remove("show")
        container2.style.visibility="hidden"

    }
})