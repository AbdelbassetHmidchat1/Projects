let toggle=document.getElementById("toggle")
let links=document.querySelector(".links-container")
let date=document.getElementById("date")
let link=document.getElementById("links")
let nav=document.querySelector('nav')
let hide=document.querySelector('.hide')
let home=document.getElementById('home')
let scrollLinks=document.querySelectorAll('.scroll-link')



date.textContent=new Date().getFullYear()
toggle.addEventListener("click",function () {
    let linksContainerHeight=links.getBoundingClientRect().height;
    let linksheight=link.getBoundingClientRect().height;
    if (linksContainerHeight===0) {
        links.style.height=`${linksheight+15}px` 
    } else {
        links.style.height="0px"     
    }
    
})
window.addEventListener("scroll",function(){
    if (window.pageYOffset>=nav.getBoundingClientRect().height) {
        nav.classList.add("fixed-nav")

        
    }
    else{
        nav.classList.remove("fixed-nav")

        
    }

    if (window.pageYOffset>=home.getBoundingClientRect().height-nav.getBoundingClientRect().height) {
        hide.classList.add("unhide")

        
    }
    else{
        hide.classList.remove("unhide")


        
    }
})
scrollLinks.forEach(function(link){
    link.addEventListener("click",function(e) {
        e.preventDefault();
        let id= e.currentTarget.getAttribute('href').slice(1)
        let element=document.getElementById(`${id}`)
        let height=element.offsetTop-nav.getBoundingClientRect().height;
        
        window.scrollTo({
            left:0,
            top:height,

        })

    })

})