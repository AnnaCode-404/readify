let currentBook = null;


/* PICK RANDOM BOOK */
function pick(){

 const g = genre.value;
 const l = length.value;

 let filtered = books.filter(b => b.genre === g);

 /* if no length match, fallback to genre only */
 const lengthMatch = filtered.filter(b => b.length === l);

 if(lengthMatch.length > 0){
   filtered = lengthMatch;
 }

 currentBook = random(filtered);

 result.textContent = currentBook.title;
}



/* SAVE TO LIST */
function saveBook(){

 if(!currentBook){
   alert("Pick a book first!");
   return;
 }

 const list = load("readingList");

 list.push(currentBook.title);

 save("readingList", list);

 renderList();
}


/* DISPLAY SAVED LIST */
function renderList(){

 list.innerHTML="";

 load("readingList").forEach((title,index)=>{

   const li=document.createElement("li");

   li.innerHTML=`
     ${title}
     <button onclick="removeBook(${index})">❌</button>
   `;

   list.appendChild(li);
 });
}

function removeBook(i){
 const arr=load("readingList");
 arr.splice(i,1);
 save("readingList",arr);
 renderList();
}



renderList();
