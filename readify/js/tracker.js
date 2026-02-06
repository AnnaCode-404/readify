function calculate(){

  const total = Number(document.getElementById("total").value);
  const read = Number(document.getElementById("read").value);
  const speed = Number(document.getElementById("speed").value);

  if(total === 0 || speed === 0){
    alert("Enter valid numbers");
    return;
  }

  const percent = Math.min((read / total) * 100, 100);

  const daysLeft = Math.ceil((total - read) / speed);

  document.getElementById("result").textContent =
    `Completed: ${percent.toFixed(1)}% | Finish in ${daysLeft} days`;

  document.getElementById("progress").style.width = percent + "%";

  // save to localStorage
  localStorage.setItem("readingProgress", percent);
}