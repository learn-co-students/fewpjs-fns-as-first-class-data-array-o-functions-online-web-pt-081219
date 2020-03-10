function wakeDog(dogName, dogBreed) {
  let wake = `Wake ${dogName} the ${dogBreed}`;
  console.log(wake);
  return wake;
}

function leashDog(dogName, dogBreed) {
  let leash = `Leash ${dogName} the ${dogBreed}`;
  console.log(leash);
  return leash;
}

function walkToPark(dogName, dogBreed) {
  let park = `Walk to the park with ${dogName} the ${dogBreed}`;
  console.log(park);
  return park;
}

function throwFrisbee(dogName, dogBreed) {
  let frisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`;
  console.log(frisbee);
  return frisbee;
}

function walkHome(dogName, dogBreed) {
  let home = `Walk home with ${dogName} the ${dogBreed}`;
  console.log(home);
  return home;
}

function unleashDog(dogName, dogBreed) {
  let unleash = `Unleash ${dogName} the ${dogBreed}`;
  console.log(unleash);
  return unleash;
}

let routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog];

function exerciseDog (dogName, dogBreed) {
  return routine.map(task => task(dogName, dogBreed))
}