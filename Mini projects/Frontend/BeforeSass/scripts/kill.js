let active=document.querySelector(".active")
let btnel=document.getElementById("join1")
let closeel=document.getElementById("close")
let bodyel=document.getElementsByTagName("body")
btnel.addEventListener("click",function Appear(){
    active.classList.remove("active")
    bodyel[0].style.backdropFilter="blur(15px)"
    bodyel[0].style.color="transparent"
    bodyel[0].style.textShadow="0 0 8px #000"
    btnel.style.filter="blur(5px)"
    bodyel[0].style.transition="all 1s"
    btnel.style.transition="all 1s"
 





})
closeel.addEventListener("click",function Disappear(){
    active.classList.add("active")
    bodyel[0].style.backdropFilter="blur(0px)"
    bodyel[0].style.color="black"
    bodyel[0].style.textShadow="0 0 0px #000"
    btnel.style.filter="blur(0px)"
    bodyel[0].style.transition="all 1s"
    btnel.style.transition="all 1s"

 

})