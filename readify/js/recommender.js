const books = [
  { title: "Harry Potter", genre: "fantasy" },
  { title: "Dune", genre: "sci-fi" },
  { title: "The Hobbit", genre: "fantasy" },
  { title: "To Kill a Mockingbird", genre: "fiction" }
];

let currentBook = "";


function recommend(){

  const genre = document.getElementById("genre").value;

  let filtered = books;

  if(genre !== "all"){
    filtered = books.filter(b => b.genre === genre);
  }

  const random = filtered[Math.floor(Math.random() * filtered.length)];

  currentBook = random.title;

  const output = document.getElementById("output");
  output.textContent = currentBook;

  output.style.transform = "scale(1.2)";
  setTimeout(()=> output.style.transform = "scale(1)", 200);
}


function saveBook(){

  if(!currentBook) return;

  let list = JSON.parse(localStorage.getItem("readingList")) || [];

  list.push(currentBook);

  localStorage.setItem("readingList", JSON.stringify(list));

  displayList();
}


function displayList(){

  const list = JSON.parse(localStorage.getItem("readingList")) || [];

  const ul = document.getElementById("list");
  ul.innerHTML = "";

  list.forEach(book=>{
    const li = document.createElement("li");
    li.textContent = book;
    ul.appendChild(li);
  });
}

displayList();