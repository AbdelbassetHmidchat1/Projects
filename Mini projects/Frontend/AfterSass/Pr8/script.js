let button = document.querySelector("button")
let vid = document.getElementById("vid")
let isplayed= false
let box=document.querySelector(".box")
let preloader=document.querySelector(".preloader")

box.addEventListener("click",function play(){
    if(isplayed==true){
    vid.play()
    isplayed= false
    box.style.transform="translateX(0%)"

}   else{
    vid.pause()
    isplayed= true
    box.style.transform="translateX(100%)"



}


    
})
window.addEventListener("load",function(){
    preloader.classList.add("preloader-hide")
})