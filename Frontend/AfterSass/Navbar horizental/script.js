let toggleBtn=document.getElementById("toggleBtn")
let links=document.querySelector(".links")
toggleBtn.addEventListener("click",function(){
    links.classList.toggle("show-links")
})