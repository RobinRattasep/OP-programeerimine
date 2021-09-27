// Objektide töötlus
const person = {
	firstname: "Kadi",
	lastname: "Tamm",
	age: 23,
	email: "Kadi.Tamm@gmail.com",
	hobbies: ["muusicka", "sport"],
	address: {
		city: "Tallinn",
		country: "Harjumaa"
	},
	getBirthdayYear: function(){
		return 2021 - this.age;
	}
};

let val;
val = person.firstname;
val = person["lastname"];
val = person.age;
val = person.hobbies[1];
val = person.address.city;

console.log(val);