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


