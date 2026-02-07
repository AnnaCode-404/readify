/* ===== UNIVERSAL NAVBAR TOGGLE ===== */
document.addEventListener("DOMContentLoaded", ()=>{

  const ham = document.querySelector(".hamburger");
  const links = document.querySelector(".links");

  if(ham && links){
    ham.addEventListener("click", ()=>{
      links.classList.toggle("show");
    });
  }

});


function save(key,data){
  localStorage.setItem(key, JSON.stringify(data));
}

function load(key){
  return JSON.parse(localStorage.getItem(key)) || [];
}

function random(arr){
  return arr[Math.floor(Math.random()*arr.length)];
}
