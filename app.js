const firstName = "Kadi";
const surName = "Tamm";
const age = 20
const text = "tere olen kadi";
const tags = "arendus,veeb";

let val;

// concatenation
val = firstName + " " + surName;
//append
val = firstName;
val += surName;
val = text + ", Minu töövaldkond on " + tags;


//escaping
val = "See on \"jutumärkides\"";

//case
val = firstName.toLowerCase()
val = firstName.toUpperCase()

val = surName[0];
val = surName.charAt(2);
val = surName.lenght;
val = surName.charAt(surName.length - 1);

val = surName.indexOf("a");
val = surName.lastIndexOf("m");
val = surName.indexOf("m");

val = surName.substring(0, 2);
val = surName.slice(0, 2);
val = surName.slice(-3);

val = tags.split(",")

console.log(val);