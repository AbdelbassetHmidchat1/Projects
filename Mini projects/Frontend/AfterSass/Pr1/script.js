let arr1=[0,1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f','A','B','C','D','E','F']
let switch1=document.getElementById("switch1")
let color=document.getElementById("color")
color.innerText="#f5f5f5"


let arrhex=['#',"a","b","c","d","e","f"]
let i=1
function random(){
    let randomindex=Math.floor(Math.random()*22)
    let randomhex=arr1[randomindex]
    return randomhex
}

switch1.addEventListener("click",function hex(){
    for (let i = 1; i < arrhex.length; i++) {
        arrhex[i]=`${random()}`

    }
    let hexcolor=arrhex.toString().replace(/,/g,"")
    color.innerText=hexcolor
    color.style.color=hexcolor
    document.body.style.backgroundColor=`${hexcolor}`
    
    
    

})

