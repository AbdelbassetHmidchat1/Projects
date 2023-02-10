let next=document.getElementById("next")
let prev=document.getElementById("prev")

let second=document.querySelectorAll(".second")
let third=document.querySelectorAll(".third")
let fourth=document.querySelectorAll(".fourth")
let i=1
next.addEventListener("click",function(){
    if(i==1){
        second.forEach(function(e){
            if (e.classList.contains("line")) {
                e.classList.add("lineblue")
            } else {
                e.classList.add("circleblue")
                
            }
            
        });
        i++
        prev.style.backgroundColor="lightskyblue"


    }
    else if (i==2) {
        third.forEach(function(e){
            if (e.classList.contains("line")) {
                e.classList.add("lineblue")
            } else {
                e.classList.add("circleblue")
                
            }
        
    })
    i++

            }
    else if (i==3) {
        fourth.forEach(function(e){
            if (e.classList.contains("line")) {
                e.classList.add("lineblue")
            } else {
                e.classList.add("circleblue")
                
            }
            
        })
        next.style.backgroundColor="rgb(128, 128, 128,20%)"
        i++
            }
      console.log(i)
    
    


})

prev.addEventListener("click",function(){
    if(i==2){
        second.forEach(function(e){
            if (e.classList.contains("line")) {
                e.classList.remove("lineblue")
            } else {
                e.classList.remove("circleblue")
                
            }
            
        });
        i--
        prev.style.backgroundColor="rgb(128, 128, 128,20%)"



    }
    else if (i==3) {
        third.forEach(function(e){
            if (e.classList.contains("line")) {
                e.classList.remove("lineblue")
            } else {
                e.classList.remove("circleblue")
                
            }
        
    })
    i--

            }
    else if (i==4) {
        fourth.forEach(function(e){
            if (e.classList.contains("line")) {
                e.classList.remove("lineblue")
            } else {
                e.classList.remove("circleblue")
                
            }
            
        })
        i--
        next.style.backgroundColor="lightskyblue"
            }
      

    


})