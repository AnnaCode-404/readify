document.addEventListener("DOMContentLoaded", ()=>{

  const form = document.querySelector("form");

  form.addEventListener("submit",(e)=>{

    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const msg = document.getElementById("msg").value.trim();

    if(!name || !email || !msg){
      alert("Please fill all fields 😊");
      return;
    }

    const arr = load("feedback");
    arr.push({name,email,msg});
    save("feedback",arr);

    alert("✅ Feedback submitted successfully!");

    form.reset();
  });

});
