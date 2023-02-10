const btns = document.querySelectorAll("img");
const answers=document.querySelectorAll(".answer")

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let answer=e.currentTarget.parentElement.parentElement
    answer.childNodes[3].classList.toggle("show-answer")
    
    
    
  });
});
