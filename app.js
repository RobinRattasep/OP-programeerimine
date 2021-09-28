/*deklareerimine
function greeting(firstname, lastname){
	if(typeof firstname === "undefined"){
		firstname = "Robin";
	}
	if(typeof lastname === "undefined"){
		lastname = "Rattasep";
	}
	return "Tere, " + firstname + " " + lastname;
}
//kasutamine
console.log(greeting())

// f-on defineeritud nagu const
const square = function(number = 3){
	return Math.pow(number, 2);

};
console.log(square())
*/

(function(){
	console.log("Funktsion is working");
})();

(function(name){
	console.log("Tere, " + name);
})("Robin");

const todoList = {
	add: function(task){
		console.log("Task is added");
	},
	edit: function(oldtask, newtask){
		console.log(`${oldtask} on muudetud = ${newtask}`);
	},
	delete: function(task){
		console.log(task + `is deleted`);
	}
};


todoList.add("Study JS");
todoList.edit("Studi JS", "Study Typescrpt");
todoList.delete("Study JS");