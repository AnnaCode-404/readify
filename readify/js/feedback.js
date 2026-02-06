// ===== FORM VALIDATION =====

function submitForm(){

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  if(name === "" || email === "" || message === ""){
    alert("Please fill all fields!");
    return;
  }

  const data = { name, email, message };

  let list = JSON.parse(localStorage.getItem("feedbacks")) || [];

  list.push(data);

  localStorage.setItem("feedbacks", JSON.stringify(list));

  document.getElementById("confirm").textContent =
    "✅ Feedback submitted successfully!";

}


// ===== FAQ ACCORDION =====

const questions = document.querySelectorAll(".q");

questions.forEach(btn=>{
  btn.addEventListener("click", ()=>{

    const answer = btn.nextElementSibling;

    answer.style.display =
      answer.style.display === "block" ? "none" : "block";

  });
});