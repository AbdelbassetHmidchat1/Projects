let cards=[]
let sum=0
let hasblackjack=false
let alive=false
let message= document.getElementById("message")
let sumP=document.getElementById("sumP")
let cardsP=document.getElementById("cards")
let newcard=false
let player={
    name:"Abdelbasset",
    chips:150 

}
console.log(player.name)

let money=document.getElementById("money")
money.textContent=player.name+": "+player.chips+"$"
function startGame(){
    alive=true
    let firstCard=getRandomCard()
    let secondCard=getRandomCard()
    cards=[firstCard,secondCard]
    sum=firstCard+secondCard
    renderGame()
    
   

}
function renderGame(){
    
    cardsP.textContent="Cards: "
    for (let i = 0; i < cards.length; i++){
        cardsP.textContent+=cards[i]+" "

    }
    sumP.innerText="Sum: "+sum
    if (sum<=20) {
       message.innerText="Do you want to draw a new card?"
    
    }
    else if(sum===21){
        message.innerText="You've got Blackjack"
        hasblackjack=true

    
    }
    else {
        message.innerText="You're out"
        alive=false

     
    }

    

}
function newCard(){
    if(alive===true && cards.length>=2){
    let Card=getRandomCard()
    sum+=Card
    cards.push(Card)
    console.log(cards)
    renderGame()
    }
    

   


}
function getRandomCard(){
    let random = Math.floor((Math.random()*13))+1
    if (random===1) {
        return 11
        
    } else if(random>10) {
        return 10
    }
    else{
        return random
    }
        
    
   

}
