

let day = new Date(12/14/2021);
let daynr = day.getDay();

console.log(daynr);
switch(daynr){
	case 0:
		console.log("Pühapäev");
		break;
	case 1:
		console.log("Esmaspäev");
		break;
	case 2:
		console.log("Teisipäev");
		break;
	case 3:
		console.log("Kolmapäev");
		break;
	case 4:
		console.log("Neljapäev");
		break;
	case 5:
		console.log("Reede");
		break;
	case 6:
		console.log("Laupäev");
		break;
	case 7:
		console.log("Pühapäev");
		break;
}
