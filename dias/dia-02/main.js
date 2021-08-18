import "./style.css";

const obj = { title: "Hello World", description: "some Desc" };

const render = ({ title, description }) => {
  document.querySelector("#app").innerHTML = `
  <h1>${title}</h1>
  ${description ? `<p>${description}</p>` : ""}
`;
};

document.querySelector('[data-js="link"]').addEventListener("click", (e) => {
  e.preventDefault();
  render({ title: "Hello World" });
});

render(obj);
