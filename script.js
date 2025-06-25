const boxes = document.querySelectorAll(".box")

boxes.forEach(box => {
   box.addEventListener("click", ()=>{
    if(box.textContent === ""){
        box.textContent = "X";
    }
    box.classList.add("x-mark");
   })
})