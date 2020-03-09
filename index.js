let wakeDog = function wakeDog(dogName, dogBreed) {
	let string = `Wake ${dogName} the ${dogBreed}`;
	console.log(string);
	return string;
};

let leashDog = function leashDog(dogName, dogBreed) {
	let string = `Leash ${dogName} the ${dogBreed}`;
	console.log(string);
	return string;
};

let walkToPark = function walkToPark(dogName, dogBreed) {
	let string = `Walk to the park with ${dogName} the ${dogBreed}`;
	console.log(string);
	return string;
};

let throwFrisbee = function throwFrisbee(dogName, dogBreed) {
	let string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
	console.log(string);
	return string;
};

let walkHome = function walkHome(dogName, dogBreed) {
	let string = `Walk home with ${dogName} the ${dogBreed}`;
	console.log(string);
	return string;
};

let unleashDog = function unleashDog(dogName, dogBreed) {
	let string = `Unleash ${dogName} the ${dogBreed}`;
	console.log(string);
	return string;
};

const routine = [ wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog ];

function exerciseDog(dogName, dogBreed) {
	return routine.map((fn) => fn(dogName, dogBreed));
}
