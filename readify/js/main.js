const quotes = [
  "A reader lives a thousand lives.",
  "Books are magic you can hold.",
  "Today a reader, tomorrow a leader.",
  "Reading is dreaming with open eyes."
];

let index = 0;

setInterval(() => {
  document.getElementById("quote").textContent = quotes[index];
  index = (index + 1) % quotes.length;
}, 3000);


// ===== Save email to localStorage =====

function saveEmail(){
  const email = document.getElementById("email").value;

  if(email === ""){
    alert("Please enter email");
    return;
  }

  localStorage.setItem("newsletterEmail", email);

  alert("Email saved successfully!");
}