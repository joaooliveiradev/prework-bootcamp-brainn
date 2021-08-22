const inputName = document.querySelector('[data-js="inputName"]');
const blockWordsArr = ["de", "da", "do", "dos"];

inputName.addEventListener("input", (e) => {
  const wordsArr = e.target.value.split(" ");
  const toUpperCase = (word) => `${word.charAt(0).toUpperCase()}${word.slice(1).toLowerCase()}`
  const modifyArr = (arr, blockWordsArr) => arr.map((word) => {
    return blockWordsArr.includes(word.toLowerCase()) ? word.toLowerCase() : toUpperCase(word);
  })
  e.target.value = modifyArr(wordsArr, blockWordsArr).join(" ")
});

//Exercicio 2
const body = document.querySelector('body');
const form = document.querySelector('[data-js="form"]');
//colors
const colors = ["blue", "red", "green", "yellow", "purple"];
//Label
const selectLabel = document.createElement("Label");
const selectLabelText = document.createTextNode("Selecione uma cor");
selectLabel.setAttribute("for", "select");
selectLabel.appendChild(selectLabelText);
form.appendChild(selectLabel);
//Select
const select = document.createElement('select');
select.setAttribute('multiple', true);
select.setAttribute('id', "select");
form.appendChild(select);



const insertColorsInSelect = (arrColors) => {
  arrColors.forEach((color) => {
    const option = document.createElement('option');
    const value = document.createTextNode(`${color}`);
    option.value = color;
    select.appendChild(option);
    option.appendChild(value);
  });
}

insertColorsInSelect(colors);
//Div Container
const divContainer = document.createElement('div');
divContainer.classList.add('container');
form.appendChild(divContainer);

const handleOption = (selectElement) => {
  selectElement.addEventListener('change', (e) => {
    divContainer.innerHTML = '';
    Array.from(e.target.selectedOptions, option => {
      console.log(option.value)
      const div = document.createElement('div');
      div.style.width = '100px';
      div.style.height = '100px';
      div.style.background = option.value;
      divContainer.appendChild(div);
    })
  })
}
handleOption(select);




