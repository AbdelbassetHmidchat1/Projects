let arr1=["#cF6Fcf","#8910dd","#F4CBbC","#F4CBbC","#CEA6dD"]
let switch1=document.getElementById("switch")
let color=document.getElementById("color")
let sample=["a"]
let main=document.querySelector("main")
function random(){
    randomnumber=Math.floor(Math.random()*arr1.length)
    return randomnumber
}
switch1.addEventListener("click",function(){
    for (let i = 0; i < sample.length; i++) {
        sample[i]=arr1[random()]
        
    }
    
    samplestring=sample.toString().replace(/,/g,"")
    color.style.color=samplestring
    color.innerText=samplestring
    main.style.backgroundColor=samplestring






})
