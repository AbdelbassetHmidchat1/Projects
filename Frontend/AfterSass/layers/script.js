let btn=document.querySelector("button")
let closeBtn=document.getElementById("close")

let modal=document.querySelector(".modal")
btn.addEventListener("click",function(){
    modal.classList.toggle("show-modal")
})
closeBtn.addEventListener("click",function(){
    modal.classList.toggle("show-modal")
})