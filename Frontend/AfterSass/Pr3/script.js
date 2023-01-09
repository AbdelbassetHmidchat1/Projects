let img=document.getElementById("imgcontainer")
let nameEl=document.getElementById("name")
let jobEl=document.getElementById("job")
let descr=document.getElementById("descr")
let next=document.getElementById("next")
let previous=document.getElementById("previous")
let random=document.getElementById("random")
let id=0
let background1="vlcsnap-2021-09-05-01h56m29s816.png"
let background2="vlcsnap-2021-11-08-01h16m46s565.png"
let background3="vlcsnap-2021-11-22-00h57m17s731.png"
function randomnumber(){
    let number= Math.floor(Math.random()*3)
    return number
}
let person=[{
    id:0,
    name:"Abdelbasset",
    job:"web developper",
    back:`/Pr3/images/${background1}`
},
{
    id:1,
    name:"Eren",
    job:"Beast",
    back:`/Pr3/images/${background2}`
},
{
    id:2,
    name:"Killua",
    job:"Relentless",
    back:`/Pr3/images/${background3}`
}
]

window.addEventListener("DOMContentLoaded",function load(){
    showperson()
    

})
function showperson(){
    nameEl.textContent=person[id].name
    jobEl.textContent=person[id].job
    img.style.backgroundImage=`url(${person[id].back})`
}
next.addEventListener("click",function next(){
    if(id<2){
        id+=1
    }
    else{
        id=0
    }
    showperson()
})
previous.addEventListener("click",function previous(){
    if(id==0){
        id=2
    }
    else{
        id-=1
    }
    showperson()
})
random.addEventListener("click",function random(){
    id=randomnumber()
    showperson()
})