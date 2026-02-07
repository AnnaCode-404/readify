document.addEventListener("DOMContentLoaded", ()=>{

  const toggleBtn = document.getElementById("toggleBtn");
  const saveBtn   = document.getElementById("saveBtn");
  const input     = document.getElementById("bookName");
  const listEl    = document.getElementById("doneList");

  const audio = new Audio("sounds/rain.mp3");
  audio.loop = true;


  /* TOGGLE SOUND */
  toggleBtn.addEventListener("click", ()=>{
    audio.paused ? audio.play() : audio.pause();
  });


  /* SAVE BOOK */
  saveBtn.addEventListener("click", ()=>{

    const name = input.value.trim();
    if(!name) return;

    const arr = load("done");
    arr.push(name);
    save("done",arr);

    input.value="";
    render();
  });


  /* REMOVE BOOK */
  function removeBook(i){
    const arr = load("done");
    arr.splice(i,1);
    save("done",arr);
    render();
  }


  /* RENDER LIST */
  function render(){

    listEl.innerHTML="";

    load("done").forEach((b,i)=>{

      const li=document.createElement("li");

      li.innerHTML=`
        📖 ${b}
        <button data-i="${i}">❌</button>
      `;

      li.querySelector("button").onclick=()=>removeBook(i);

      listEl.appendChild(li);
    });
  }

  render();

});
