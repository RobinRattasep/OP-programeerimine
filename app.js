/*
if(tingumus){
	//tegevused if puhul
	
}	else {
	// tegevused else puhul
}
*/

const id = 100;
// võrdub - ==
// võrdub + tüübikontroll - ===
if(id == 100){
	console.log("Okei");
} else {
	console.log("Ei ole okei");
}
let testId;
if(typeof testId !== "undefined"){
	console.log("ID is OK");
} else { 
console.log("ID does not exist");
}

// < ja >
if(id>100){
	console.log("ID is greater than 100");
} else {
	console.log("ID is equal or less than 100");
}

let color = "yellow";
if(color == "red"){
	console.log("STOP");
}else if(color == "yellow"){
	console.log("Attention");
}else if(color =="green"){
	console.log("GO");
}



let name = "Kadi";
let age = 8;
if(age > 0 && age <=12){
	console.log(`${name} on lapse`)
}