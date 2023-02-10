let arr1=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','A','B','C','D','E','F']
let switch1=document.getElementById("switch")
let color=document.getElementById("color")
let sample=["#","a","b","c","d","e","f"]
let main=document.querySelector("main")
function random(){
    randomnumber=Math.floor(Math.random()*arr1.length)
    return randomnumber
}
switch1.addEventListener("click",function(){
    for (let i = 1; i < sample.length; i++) {
        sample[i]=arr1[random()]
        
    }
    
    samplestring=sample.toString().replace(/,/g,"")
    color.style.color=samplestring
    color.innerText=samplestring
    main.style.backgroundColor=samplestring






})
