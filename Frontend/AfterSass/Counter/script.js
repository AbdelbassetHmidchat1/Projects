let inc=document.getElementById("inc")
let dec=document.getElementById("dec")
let res=document.getElementById("res")
let num=document.getElementById("num")
let value=0
num.textContent=value
inc.addEventListener("click",function() {
    value++
    save()
})
dec.addEventListener("click",function() {
    value--
    save()    
})
res.addEventListener("click",function() {
    value=0
    save() 
})
function save(){
if (value==0) {
    num.style.color="black"
} 
else if(value>0){
    num.style.color="green"
}
else{
    num.style.color="red"
}
num.textContent=value
}