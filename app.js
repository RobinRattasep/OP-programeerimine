const firstName = "Kadi";
const surName = "Tamm";
const age = 20
const tags = "arendus,veeb";

let val;

// concatenation {}
val = `
	<ul>
		<li>Eesnimi: ${firstName}</li>
		<li>Perenimi: ${surName}</li>
		<li>Vanus: ${age}</li>
		<li>Alad: ${tags}</li>
	</ul>
`;

console.log(val);
document.body.innerHTML = val;