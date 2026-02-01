function goToLock() {
  document.getElementById("page1").style.display = "none";
  document.getElementById("lock").style.display = "block";
}

function unlock() {
  const pass = document.getElementById("pass").value;
  const error = document.getElementById("error");

  if (pass === "october") {
    document.getElementById("lock").style.display = "none";
    document.getElementById("content").style.display = "block";
  } else {
    error.innerText = "Wrong password 😢 try again";
  }
}
