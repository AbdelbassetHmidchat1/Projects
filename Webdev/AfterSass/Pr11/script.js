let toggle=document.getElementById("toggle")
let links=document.querySelector(".disappear")
let linksul=document.getElementById("links")
let linkheight=document.getElementById("links").getBoundingClientRect().height
let containerheight=document.getElementById("links-container").getBoundingClientRect().height
toggle.addEventListener("click",function(){
    if (links.classList.contains("appear")) {
        links.classList.remove("appear")
        links.style.height=`0px`

        

        
    
        
    } else {
        links.classList.add("appear")
        links.style.height=`${containerheight}px`

        
    }
})