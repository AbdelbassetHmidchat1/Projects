let switchBtn=document.querySelector(".switch")
let video=document.querySelector("video")
let isplayed=true
switchBtn.addEventListener("click",function(){
    if (isplayed==true) {
        video.pause()
        isplayed=false
        switchBtn.style.transform="translateX(100%)"
        
    } else {
        video.play()
        isplayed=true
        switchBtn.style.transform="translateX(0%)"


        
    }
})