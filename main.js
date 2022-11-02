const listElement = document.getElementById("list__item--click1");
const ulElement = document.getElementById("container__show-features");
const arrowElement = document.getElementById("arrow__down1");
const spanElement = document.getElementById("text__click1");

listElement.addEventListener("click", ()=>{
      ulElement.classList.toggle("activo");
      arrowElement.classList.toggle("activo");
      spanElement.classList.toggle("activo");
})

document.addEventListener("click", function(event) {
      if(event.target.closest("#list__item--click1")) return
      ulElement.classList.remove("activo");
      arrowElement.classList.remove("activo");
      spanElement.classList.remove("activo");
})

const listElement2 = document.getElementById("list__item--click2");
const ulElement2 = document.getElementById("container__show--company");
const arrowElement2 = document.getElementById("arrow__down2");
const spanElement2 = document.getElementById("text__click2");

listElement2.addEventListener("click", ()=>{
      ulElement2.classList.toggle("activo");
      arrowElement2.classList.toggle("activo");
      spanElement2.classList.toggle("activo");
})

document.addEventListener("click", function(event) {
      if(event.target.closest("#list__item--click2")) return
      ulElement2.classList.remove("activo");
      arrowElement2.classList.remove("activo");
      spanElement2.classList.remove("activo");
})