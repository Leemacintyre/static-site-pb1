const animalData = [
    {
        id: 1,
        title: "hippo",
        faveFood: "carrots",
    },
    {
        id: 2,
        title: "Cat",
        faveFood: "carrots",
    },
    {
        id: 3,
        title: "ducks",
        faveFood: "breadcrumbs",
    },
]

exports.findAnimal = function (args) {
    let answer = null
    for (x = 0; x < animalData.length; x++) {
        const { title, faveFood } = animalData[x]
        if (title.toLowerCase() === args.toLowerCase()) {
            answer = faveFood
            break
        }
    }
    return answer
}

// in the if statement you were reassigning title to args[0] you should be using === to check its equal
// you should be looking for the length of the list rather than using a static value this means the list can be updated without changing the code
// you should break from the loop otherwise you will end up looping more the you need to
// you should pass args in as a property to the function otherwise args would be undefined
// you could make use of let and const es6 features
// you could destructure animalData[x] to improve readability
// you could also make the compared values lowercase so it would still match on incorrect casing
// since you are only comparing the first value you could accept a string rather than an array
