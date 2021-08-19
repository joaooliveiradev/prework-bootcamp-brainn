//Tipos Primitivos
//string
//number
//boolean
//null
//undefined
//symbol
//bigint

console.log("Primitivo: ", 1n === 1n);

//Tipos Objetos
//array
//objetos
//functions
//regexp
//date

const memoria = [[]];

const someArr = [];
const someArr2 = someArr;

someArr2[0] = [10];

console.log("Arr1", someArr);
console.log("Arr2", someArr2);
