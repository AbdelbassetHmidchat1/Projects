let reviews=[
    {
        id: 1,
        name: "susan smith",
        job: "web developer",
        img:
          "/images/4.png",
        text:
          "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
      },
      {
        id: 2,
        name: "anna johnson",
        job: "web designer",
        img:
          "/images/1.jpg",
        text:
          "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
      },
      {
        id: 3,
        name: "peter jones",
        job: "intern",
        img:
          "/images/2.png",
        text:
          "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
      },
      {
        id: 4,
        name: "bill anderson",
        job: "the boss",
        img:
          "/images/3.png",
        text:
          "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
      },
]
let prev=document.getElementById("prev")
let next=document.getElementById("next")
let random=document.getElementById("random")
let pic=document.getElementById("pic")
let title=document.getElementById("name")
let job=document.getElementById("job")
let desc=document.getElementById("desc")

let currentitem = 0
function showPerson(person){
  let item = reviews[person]
  pic.style.backgroundImage=`url(${item.img})`
  title.textContent=item.name
  job.textContent=item.job
  desc.textContent=item.text

}
function randomnumber(){
  let randomnum=Math.floor(Math.random()*4)
  return randomnum
}
window.addEventListener("DOMContentLoaded",function(){
  showPerson(currentitem)
  
})
next.addEventListener("click",function(){
  currentitem+=1
  if (currentitem==reviews.length) {
    currentitem=0

  } 
  showPerson(currentitem)
  
  
  

})
prev.addEventListener("click",function(){
  currentitem-=1
  if (currentitem<0) {
    currentitem=reviews.length-1
  }
  showPerson(currentitem)



})
random.addEventListener("click",function(){
  currentitem=randomnumber()
  showPerson(currentitem)

})