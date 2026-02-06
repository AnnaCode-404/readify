const books = [
  {
    title: "Harry Potter",
    author: "J.K Rowling",
    synopsis: "A boy discovers he is a wizard.",
    image: "images/harry.webp"
  },
  {
    title: "The Hobbit",
    author: "Tolkien",
    synopsis: "Adventure with dwarves.",
    image: "images/hobbit.webp"
  },
  {
    title: "Dune",
    author: "Frank Herbert",
    synopsis: "Epic sci-fi desert world.",
    image: "images/dune.webp"
  }
];

const container = document.getElementById("bookContainer");
const search = document.getElementById("search");


// ===== show books =====

function displayBooks(list){
  container.innerHTML = "";

  list.forEach(book => {
    const card = document.createElement("div");
    card.className = "card";

  card.innerHTML = `
  <img src="${book.image}" class="cover">
  <h4>${book.title}</h4>
  <p>${book.author}</p>
`;

    card.onclick = () => openModal(book);

    container.appendChild(card);
  });
}

displayBooks(books);


// ===== search =====

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  const filtered = books.filter(b =>
    b.title.toLowerCase().includes(value) ||
    b.author.toLowerCase().includes(value)
  );

  displayBooks(filtered);
});


// ===== modal =====

const modal = document.getElementById("modal");
const close = document.getElementById("close");

function openModal(book){
  modal.style.display = "block";
  document.getElementById("title").textContent = book.title;
  document.getElementById("synopsis").textContent = book.synopsis;
}

close.onclick = () => modal.style.display = "none";
