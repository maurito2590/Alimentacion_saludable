let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>
{
    searchForm.classList.toggle('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>
{
    loginForm.classList.toggle('active');
    searchForm.classList.remove('active');
    navbar.classList.remove('active');

}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>
{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>
{   
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    navbar.classList.remove('active');
}


const checkbox = document.querySelector('.my-form input[type="checkbox"]');
const btns = document.querySelectorAll(".my-form button");

checkbox.addEventListener("change", function() {
  const checked = this.checked;
  for (const btn of btns) {
    checked ? (btn.disabled = false) : (btn.disabled = true);
  }
});
function validateForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const tel = document.getElementById("tel").value;
  const sede = document.querySelector(".select").value;
  const consult = document.getElementById("consult").value;
  const warnings = document.getElementById("warnings");
if (name === "" || email === "" || tel === "" || sede === "Elige tu sede" || consult === "") {
      warnings.innerHTML = "Por favor, complete todos los campos";
      return false;
  }
}