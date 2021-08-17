import "./style.css";

const appElement = document.querySelector('[data-js="app"]');
appElement.innerHTML = `
  <h1>B. Academy</h1>
  <p>Boas vindas à semana de pré-work para o Bootcamp em React.js 😁</p>
`;
const anchor = document.querySelector('[data-target="anchor"]');
const changeVisibility = () => {
  if (appElement.classList.contains("show")) {
    appElement.classList.add("hide");
    appElement.classList.remove("show");
  } else {
    appElement.classList.add("show");
    appElement.classList.remove("hide");
  }
};
anchor.addEventListener("click", changeVisibility);
