// tsükkel
for(let i = 0; i < 10; i ++){
	if(i % 2 === 0)
	console.log(i);
}

for(let i = 0; i < 10; i ++){
	if(i === 5)
		continue;
	console.log(i);
}

let i = 0;
while(i < 10){
	console.log(i);
	i++;
}

let j = 0;
do {
	console.log(j);
	j++;
} while(j<10);

// tsükkel ja massiivid
const cars = ["ford", "honda", "toyota"];
for(let i = 0; i < cars.length; i++){
	console.log(cars[i]);
}

//foreach-iga
cars.forEach(function(car, index){
	console.log(`${index} - ${car}`)
});