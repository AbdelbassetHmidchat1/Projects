let navmax=document.querySelector(".nav-max")
let toggle=document.getElementById("toggle")
toggle.addEventListener("click",function(){
    if (navmax.classList.contains("show-links")) {
        navmax.classList.remove("show-links")

        
    } else {
        navmax.classList.add("show-links")


        
    }
})