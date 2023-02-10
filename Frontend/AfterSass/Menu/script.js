const menu = [
    {
      id: 1,
      title: "Oatmeal with Cranberries and Pecans",
      category: "breakfast",
      price: 15.99,
      img: "/images/oatmeal.jpg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "Pizza Burgers",
      category: "lunch",
      price: 13.99,
      img: "/images/pizza.jpg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "chocolate milkshake",
      category: "shakes",
      price: 6.99,
      img: "/images/chocolate.jpg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "Easy Chicken Salad",
      category: "breakfast",
      price: 20.99,
      img: "/images/salad.jpg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "Chicken and Basil Sandwich",
      category: "lunch",
      price: 22.99,
      img: "/images/sandwich.jpg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "/images/oreo.jpg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "Blender Pancakes",
      category: "breakfast",
      price: 8.99,
      img: "/images/pancakes.jpg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    
  ];
  let grid =document.querySelector(".grid")
  let nav =document.querySelector("nav")

  window.addEventListener('DOMContentLoaded',function(){
    DisplayItems(menu)
    displayButtons(menu)
    let buttons=document.querySelectorAll("button")
    buttons.forEach(btn => {
      btn.addEventListener("click",function(e) {
        let category=e.currentTarget.dataset.id
        let filteredmenu=menu.filter(function(menuItem){
          if (category===menuItem.category) {
            return menuItem
            
          }
  
        })
        if (category==="all") {
          DisplayItems(menu)
          
        } else {
          DisplayItems(filteredmenu)
          
        }
        
        
      })
      
    });
    
  
  })
  function DisplayItems(menu){
    let elements=menu.map(function(item){
        return `<div class="box">
        <div class="image">
        <img src="${item.img}" alt="">
    </div>
    <div class="description">
        <div class="title">
            <p>${item.title}</p>
            <p><span class="gold">${item.price}</span></p>
        </div>
        <p>
        ${item.desc}
        </p>     
    </div>
    </div>`
    })
   
    grid.innerHTML=elements.join("")

  }
  function displayButtons(menu) {
    let categories=menu.reduce(function(values,item){
      if (!values.includes(item.category)) {
        values.push(item.category)
        
      }
      return values
  
    },["all"]
  
    )
    let buttons=categories.map(function(item){
      return ` <button data-id="${item}">${item}</button>`
    })
    nav.innerHTML=buttons.join("")
    
    
  }
