

  function wakeDog(dogName, dogBreed) {
    return `Wake ${dogName} the ${dogBreed}`;
}

function leashDog(dogName, dogBreed) {
  return `Leash ${dogName} the ${dogBreed}`;
}

function walkToPark(dogName, dogBreed) {
  return `Walk to the park with ${dogName} the ${dogBreed}`;
}

function throwFrisbee(dogName, dogBreed) {
  return `Throw the frisbee for ${dogName} the ${dogBreed}`;
}

function walkHome(dogName, dogBreed) {
  return `Walk home with ${dogName} the ${dogBreed}`;
}

function unleashDog(dogName, dogBreed) {
  return `Unleash ${dogName} the ${dogBreed}`;
}

let routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
]
// to make this an array do.. let(function name) = [name of function, name of function, etc]


function exerciseDog(dogName, dogBreed) {
  return routine.map (function(fn) {
    return fn(dogName, dogBreed)
  });
}

// function excerciseDog(dogName, dogBreed) {
// return routine.map (function(fn) {
//     // above iterates over routine array
// return fn(dogName, dogBreed)
// // return fn (the function) with name and breed is above
// });
// }



