// ===== SOUND =====

const audio = new Audio("sounds/cozy.mp3"); 
audio.loop = true;

let playing = false;

function toggleSound(){
  if(playing){
    audio.pause();
  } else {
    audio.play();
  }
  playing = !playing;
}


// ===== COMPLETED BOOKS =====

function addBook(){

  const name = document.getElementById("bookName").value;

  if(name === "") return;

  let list = JSON.parse(localStorage.getItem("completedBooks")) || [];

  list.push(name);

  localStorage.setItem("completedBooks", JSON.stringify(list));

  display();
}


function display(){

  const ul = document.getElementById("completedList");

  const list = JSON.parse(localStorage.getItem("completedBooks")) || [];

  ul.innerHTML = "";

  list.forEach(book=>{
    const li = document.createElement("li");
    li.textContent = book;
    ul.appendChild(li);
  });
}

display();