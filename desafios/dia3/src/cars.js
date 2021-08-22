const formCars = document.querySelector('[data-js="formCars"]');

const getField = target => field => target.elements[field].value;
const tableBody = document.querySelector('[data-js="tbody"]');
const ElementTypes = {
    image: createImage,
    text: createText,
    div: createDiv
}
function createImage(value) {
    const tableData = document.createElement('td');
    const img = document.createElement('img');
    console.log(value)
    img.src = value;
    img.width = 100;
    tableData.appendChild(img);
    return tableData
}
function createText(value) {
    const tableData = document.createElement('td');
    tableData.textContent = value
    return tableData
}
function createDiv(value) {
    const tableData = document.createElement('td');
    const div = document.createElement('div');
    div.style.height = '100px';
    div.style.background = value;
    tableData.appendChild(div);
    return tableData;
}

formCars.addEventListener('submit', (e) => {
    e.preventDefault();
    const getValue = getField(e.target);
    const dadosApi = [
        { value: getValue('imagem'), type: 'image' },
        { value: getValue('marca-modelo'), type: 'text' },
        { value: getValue('ano'), type: 'text' },
        { value: getValue('placa'), type: 'text' },
        { value: getValue('cor'), type: 'div' },
    ]
    handleForm(dadosApi)
});


const handleForm = (data) => {
    const tableRow = document.createElement('tr');
    tableBody.appendChild(tableRow);
    data.forEach(data => {
        const tableData = ElementTypes[data.type](data.value)
        tableBody.appendChild(tableData);
    });
}


