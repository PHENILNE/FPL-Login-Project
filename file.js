document.getElementById("password").addEventListener("keyup", (e) => {
  console.log(e.key);
});

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  let pass = document.getElementById("password").value;
  if (pass !== "ugali") {
    document.getElementById("error").textContent = "Password error!!";
  } else {
    document.getElementById("error").textContent = "";
  }
});
