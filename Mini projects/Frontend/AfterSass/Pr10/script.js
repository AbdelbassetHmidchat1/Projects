let menu=document.querySelector(".menu")
let toggle=document.getElementById("one")
toggle.addEventListener("click",function(){
    if(menu.classList.contains("hide")){
        menu.classList.remove("hide")
    }
    else{
        menu.classList.add("hide")
    }
})
