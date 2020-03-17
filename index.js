function wakeDog(dogName, dogBreed) {
  let msg = `Wake ${dogName} the ${dogBreed}`;
  return msg;
}

function leashDog(dogName, dogBreed) {
  let msg = `Leash ${dogName} the ${dogBreed}`;
  return msg;
}

function walkToPark(dogName, dogBreed) {
  let msg = `Walk to the park with ${dogName} the ${dogBreed}`;
  return msg;
}

function throwFrisbee(dogName, dogBreed) {
  let msg = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  return msg;
}

function walkHome(dogName, dogBreed) {
  let msg = `Walk home with ${dogName} the ${dogBreed}` ;
  return msg;
}

function unleashDog(dogName, dogBreed) {
  let msg = `Unleash ${dogName} the ${dogBreed}`;
  return msg;
}

const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]

function exerciseDog(dogName, dogBreed) {
  let results = [];
  for (let i = 0; i < routine.length; i++) {
     results.push(routine[i](dogName, dogBreed));
  }
  return results;
}