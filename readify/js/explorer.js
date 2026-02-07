document.addEventListener("DOMContentLoaded", ()=>{

  const grid = document.getElementById("grid");
  const input = document.getElementById("searchInput");
  const btn = document.getElementById("searchBtn");


  function show(list){
    grid.innerHTML="";

    list.forEach(b=>{
      const card=document.createElement("div");
      card.className="card";

      card.innerHTML=`
        <img src="${b.image}">
        <h4>${b.title}</h4>
        <p>${b.author}</p>
      `;

      grid.appendChild(card);
    });
  }


  function searchBooks(){

    const text=input.value.trim().toLowerCase();

    if(text===""){
      show(books);
      return;
    }

    const filtered=books.filter(b=>
      b.title.toLowerCase().includes(text) ||
      b.author.toLowerCase().includes(text) ||
      b.genre.toLowerCase().includes(text)
    );

    show(filtered);
  }


  btn.addEventListener("click",searchBooks);

  show(books);

});
