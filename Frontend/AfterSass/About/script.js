let button=document.querySelectorAll("button")
let title=document.getElementById("title")
let content=document.getElementById("content")
let bio=document.querySelector(".bio")
let story=document.querySelector(".story")
let goals=document.querySelector(".goals")


let info={
    picture:"../images/1.jpg",
    biography:"Name: Kaneki kun <br> age:16 <br> age:18 <br> Type:Half human half ghoul <br> Mission:Even he doesn't know <br> best friend:Hatake <br> power:infinte <br> ",
    story:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nisi impedit aliquid inventore culpa. Necessitatibus dicta quisquam dolor ullam ex doloribus, nulla totam, deserunt minus officia vel asperiores delectus ducimus sed facilis saepe quibusdam consequatur. Molestias harum dicta ipsam commodi sit officiis veritatis a! Similique repellat sint laborum, quaerat aliquam tempora quasi deleniti nesciunt totam perspiciatis vero, consectetur odit a, saepe repudiandae possimus. Autem, repellat veniam assumenda odio itaque eveniet veritatis ullam provident incidunt quidem. Architecto quisquam nostrum nemo odio.",
    goals:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum suscipit quam corrupti adipisci cumque culpa? Esse ad dolore odit architecto eum, magnam cupiditate vel amet necessitatibus deleniti aperiam ab perferendis culpa eligendi unde quidem sint non? Ipsam nisi dolores nihil!",

}
let img=document.querySelector("img")
bio.addEventListener("click",function(){
    bio.classList.add("active")
    story.classList.remove("active")
    goals.classList.remove("active")
})
story.addEventListener("click",function(){
    story.classList.add("active")
    bio.classList.remove("active")
    goals.classList.remove("active")
})
goals.addEventListener("click",function(){
    goals.classList.add("active")
    story.classList.remove("active")
    bio.classList.remove("active")
})
button.forEach(function(btn){
    btn.addEventListener("click",function(e){
        if (e.currentTarget.classList.contains("bio")) {
            content.innerHTML=info.biography
            title.innerText=`${bio.dataset.id}`
        } else if(e.currentTarget.classList.contains("story")) {
            content.innerHTML=info.story
            title.innerText=`${story.dataset.id}`


            
        }
        else if(e.currentTarget.classList.contains("goals")){
            content.innerHTML=info.goals
            title.innerText=`${goals.dataset.id}`

        }

    })
   
})
