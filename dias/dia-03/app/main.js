import "./style.css";

const app = document.querySelector("#app");
const form = document.querySelector('[data-js="form"');

const checkboxes = document.querySelectorAll('[data-js="checkboxLang"]');

const radios = document.querySelectorAll('[data-js="radioGender"');

const selectLang = document.querySelector('[data-select="lang-select"]');

const selectGender = document.querySelector('[data-select="gender-select"]');

//currying
const getField = (target) => (field) => target.elements[field].value;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.elements);

  const getValue = getField(e.target);

  const dadosApi = {
    Name: getValue("name"),
    Email: getValue("email"),
    Languages: Array.from(e.target.elements["lang-select"].selectedOptions).map(
      (el) => el.value
    ),
  };

  console.log(dadosApi);
});

// form.addEventListener("click", (e) => {
//   console.log("target", e.currentTarget);
// });

const inputName = document.querySelector('[data-js="name"]');

inputName.addEventListener("input", (e) => {});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("input", (e) => {
    console.log(e.target.attributes.value.nodeValue, e.target);
  });
});

radios.forEach((radio) => {
  radio.addEventListener("click", (e) => {
    console.log("Target", e.target);
  });
});

selectLang.addEventListener("change", (e) => {
  console.log([...e.target.selectedOptions].map((el) => el.value));
  // console.log(
  //   [...e.target.options].map((option) => ({
  //     value: option.value,
  //     selected: option.selected,
  //   }))
  // );
});
selectGender.addEventListener("change", (e) => {
  console.log(e.target);
});
