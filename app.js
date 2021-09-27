const numbers = [23, 24, 54, 65, 67, 3];
const numbers2 = [15, 99, 27, 11, 22, 43];

const fruits = ["õun", "banaan", "apelsin", "virsik"];


const mixed = [22, "tere", true, undefined, null, {a: 1, b:2}, new Date()];

let val;
val = numbers.length; //massiivi pikkus 
val = Array.isArray(numbers); //kas on massiiv
val = numbers[3]; // Kindel väärtus
numbers[3] = 100;
console.log(numbers);

//lisamine
numbers.push(250);
numbers.unshift(120);

//maha võtmine
numbers.pop();

numbers.unshift();


// index
val = numbers.indexOf(100);

//lõikamine
numbers.splice(2, 1);

//ühendamine / merge
val = numbers.concat(numbers2);

//sorteerimine
val = fruits.sort();
val = numbers.sort(function(x, y){
	return y - x;
});
