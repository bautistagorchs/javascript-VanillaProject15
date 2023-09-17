const colors = ["green", "red", "steelBlue", "OrangeRed", "Magenta"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// barra de navegacion
const navBar = document.querySelector("nav")

btn.addEventListener("click", function () {
  const randomNumber = getRandomNumber();
  // console.log(randomNumber);
  const randomNumberNavBar = getRandomNumberNavBar()

  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  document.navBar.styles.backgroundColor = "green";
});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

function getRandomNumberNavBar() {
  return Math.floor(Math.random() * colors.length);
}

console.log(navBar);