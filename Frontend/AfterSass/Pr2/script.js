let num=document.getElementById("num")
let button=document.querySelectorAll("button")
count=0
num.textContent=count
button.forEach(function (btn){
    btn.addEventListener("click",function (f){
        let styles=f.currentTarget.classList
        if(styles.contains('decrease')){
            count-=1

        }
        else if(styles.contains('increase')){
            count+=1

        }
        else if(styles.contains('reset')){
            count=0
            
        }
        if(count>0){
            num.style.color="green"

        }
        else if(count==0){
            num.style.color="black"

        }
        else if(count<0){
            num.style.color="red"
        }
        num.textContent=count
    })





})