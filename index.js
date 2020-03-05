// 1. Create all required Fns
function wakeDog(dogName, dogBreed) {
    let string = `Wake ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

function leashDog(dogName, dogBreed) {
    let string = `Leash ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

function walkToPark(dogName, dogBreed) {
    let string = `Walk to the park with ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

function throwFrisbee(dogName, dogBreed) {
    let string = `Throw the frisbee for ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

function walkHome(dogName, dogBreed) {
    let string = `Walk home with ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}

function unleashDog(dogName, dogBreed) {
    let string = `Unleash ${dogName} the ${dogBreed}`
    console.log(string)
    return string
}


// 2. Save said Fns into an array
const routine = [wakeDog, leashDog, walkToPark, throwFrisbee, walkHome, unleashDog]


// 3. Create a Fn that loops through the array
function exerciseDog(dogName, dogBreed) {
    let array = [];

    for (let i = 0; i < routine.length; i++) {
        array.push(routine[i](dogName, dogBreed))
    }

    return array
}


// 4. Execute function 66
exerciseDog('Shug', 'Cocker Spaniel')