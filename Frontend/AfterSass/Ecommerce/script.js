let womengrid=document.getElementById("womengrid")
let mengrid=document.getElementById("mengrid")
let ind1=document.getElementById("ind1")
let ind2=document.getElementById("ind2")
let ind3=document.getElementById("ind3")
let ind4=document.getElementById("ind4")
let ind5=document.getElementById("ind5")
let ind6=document.getElementById("ind6")
let pinterest=document.getElementById("pinterest")
let twitter=document.getElementById("twitter")
let faders = document.querySelectorAll(".fade-in");
let submitcon =document.getElementById("submitcon")
let submit =document.getElementById("submit")
let cart1 =document.getElementById("cart1")
let num =document.getElementById("num")
let count=0
let cartsubmit=document.querySelectorAll(".increment")
let show=document.querySelector(".show")
cartsubmit.forEach(i=>{
    i.addEventListener("click",function test(){
      alert("item added succesfully!")
      count+=1
      num.innerText=count
    })

});




const appearOptions = {
  threshold: 0.5
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

count=0
initial=0
initial2=0


ind1.addEventListener("click",function alternate1(){
    if(initial!=0){
        womengrid.style.transform="translateX(-0vw)"
        initial=0
    }


    
})
ind2.addEventListener("click",function alternate1(){
    if(initial!=83.75){
        womengrid.style.transform="translateX(-83.75vw)"
        initial=83.75
        
    }
   

    
})
ind3.addEventListener("click",function alternate1(){
    if(initial!=167.5){
        womengrid.style.transform="translateX(-167.5vw)"
        initial=167.5
        
    }
   

    
})
ind4.addEventListener("click",function alternate1(){
    if(initial2!=0){
        mengrid.style.transform="translateX(-0vw)"
        initial2=0
    }
   

    
})
ind5.addEventListener("click",function alternate1(){
    if(initial2!=83.75){
        mengrid.style.transform="translateX(-83.75vw)"
        initial2=83.75
        
    }
   

    
})
ind6.addEventListener("click",function alternate1(){
    if(initial2!=167.5){
        mengrid.style.transform="translateX(-167.5vw)"
        initial2=167.5
        
    }
   

    
})

submit.addEventListener("click",function submitmail(){
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(submitcon.value))
  {
    alert("Email has been submitted succesfully!")
    submitcon.value=""
  }
  else{
    alert("You have entered an invalid email address! try again")
    submitcon.value=""

}

  
})
twitter.addEventListener("click",function alert() {
  alert("Hasn't been created yet!")
  
})
pinterest.addEventListener("click",function alert1() {
  alert("Hasn't been created yet!")
  
})
window.addEventListener("load",function(){
  show.classList.add("hide")
})