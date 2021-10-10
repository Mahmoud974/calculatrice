const btn = document.querySelectorAll(".btn-dark");
const screenWhite = document.querySelector(".screen");
const screen = document.querySelector(".screen>h1");
const mouse = document.querySelector(".calculatrice");
const historique = document.createElement("p");

screenWhite.prepend(historique);

console.log(historique);

historique.classList.add("historique", "text-end");

let resultat;
mouse.style.setProperty("--position", "relative");
btn.forEach(button => {
  button.addEventListener("click", e => {
    resultat = screen.textContent += e.target.id;
  });
});

equal.addEventListener("click", () => {
  screen.textContent = eval(resultat);

  historique.textContent = eval(resultat);
});
clear.addEventListener("click", () => {
  screen.textContent = " ";
});

const mouveActive = () => {
  window.addEventListener("mousemove", e => {
    mouse.style.setProperty("--x", e.pageX + "px");
    mouse.style.setProperty("--y", e.pageY + "px");
    console.log(e);
    mouse.style.setProperty("--position", "absolute");
  });
};
