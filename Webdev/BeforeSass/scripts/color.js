let arr=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']
let test=document.getElementById("test")
let body=document.getElementById("bcolor")
function RandomNumber(){
    let random=arr[Math.floor(Math.random()*16)]
    return random
}
function RandomArray(){
    let arrayrandom=["a","b","c","d","e","f"]
    arrayrandom[0]=RandomNumber()
    arrayrandom[1]=RandomNumber()
    arrayrandom[2]=RandomNumber()
    arrayrandom[3]=RandomNumber()
    arrayrandom[4]=RandomNumber()
    string="#"+arrayrandom.toString()
    arrayran=string.replace(/,/g,"")
    return arrayran

}
for (let i = 0; i < 16; i++) {
    let box=document.getElementsByClassName("box")[i]
    box.innerText=RandomArray()
    box.style.backgroundColor=box.innerText
 
    


    
}
