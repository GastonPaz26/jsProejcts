let count = 0;

const btns = document.querySelectorAll(".btn")
const value = document.querySelector("#value")

btns.forEach(function(btn){
  btn.addEventListener("click", function(e){
    const style = e.currentTarget.classList;
    if (style.contains("decrease")){
      count--;
    }
      else if(style.contains("reset")){
        count = 0
      }
      else{
        count++
      }
    value.textContent = count;
  })
})

