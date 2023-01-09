let box1=document.querySelector(".box1")
let box2=document.querySelector(".box2")
let box3=document.querySelector(".box3")
let img=document.getElementsByTagName('img')
let imglist=Array.prototype.slice.call(img)
let p=document.getElementsByTagName('p')
let plist=Array.prototype.slice.call(p)
window.addEventListener("DOMContentLoaded",function del(){
    box1.classList.remove("show")
    box2.classList.remove("show")
    box3.classList.remove("show")
   

})
imglist[0].addEventListener('click',function test0(){
    if(!box1.classList.contains("show")){
        box1.classList.add("show")
        box2.classList.remove("show")
        box3.classList.remove("show")
        imglist[0].src="../ionicons/remove-outline.svg"
        imglist[1].src="../ionicons/add-outline.svg"
        imglist[2].src="../ionicons/add-outline.svg"


        
        p[0].style.opacity="100"
    }
    else{
        box1.classList.remove("show")
        p[0].style.opacity="0"
        imglist[0].src="../ionicons/add-outline.svg"



    }

})
imglist[1].addEventListener('click',function test1(){
    if(!box2.classList.contains("show")){
        box2.classList.add("show")
        p[1].style.opacity="100"
        box1.classList.remove("show")
        box3.classList.remove("show")
        imglist[1].src="../ionicons/remove-outline.svg"
        imglist[0].src="../ionicons/add-outline.svg"
        imglist[2].src="../ionicons/add-outline.svg"


    }
    else{
        box2.classList.remove("show")
        p[1].style.opacity="0"
        imglist[1].src="../ionicons/add-outline.svg"



    }

})
imglist[2].addEventListener('click',function test2(){
    if(!box3.classList.contains("show")){
        box3.classList.add("show")
        p[2].style.opacity="100"
        box1.classList.remove("show")
        box2.classList.remove("show")
        imglist[2].src="../ionicons/remove-outline.svg"
        imglist[1].src="../ionicons/add-outline.svg"
        imglist[0].src="../ionicons/add-outline.svg"


    }
    else{
        box3.classList.remove("show")
        p[2].style.opacity="0"
        imglist[2].src="../ionicons/add-outline.svg"



    }

})