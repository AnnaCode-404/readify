document.addEventListener("DOMContentLoaded", ()=>{

  /* ========= QUOTES ========= */
  const quoteEl = document.getElementById("quote");

  const quotes = [
    "Escape into stories ✨",
    "Books heal the soul ☕",
    "One more chapter 📚"
  ];

  let i=0;

  setInterval(()=>{
    if(quoteEl){
      quoteEl.textContent = quotes[i];
      i=(i+1)%quotes.length;
    }
  },3000);



  /* ========= AUTHOR OF DAY ========= */
  const authorEl = document.getElementById("author");

  if(authorEl){
    const authors = ["Rowling","Tolkien","Herbert","King"];
    authorEl.textContent =
      authors[new Date().getDate()%authors.length];
  }



  /* ========= FEATURED BOOKS ========= */
  const grid = document.getElementById("featuredGrid");

  if(grid){

    const featured = [
      {title:"Harry Potter", img:"images/books/hp.jpg"},
      {title:"Dune", img:"images/books/dune.jpeg"},
      {title:"Hobbit", img:"images/books/hobbit.jpg"}
    ];

    featured.forEach(b=>{
      const card=document.createElement("div");
      card.className="card";
      card.innerHTML=`<img src="${b.img}"><h4>${b.title}</h4>`;
      grid.appendChild(card);
    });
  }

});
