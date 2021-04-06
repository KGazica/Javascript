// function rollDie(numSides){
//     if(numSides === undefined) {
//         numSides = 6
//     }
//     return Math.floor(Math.random()* numSides) +1
// }
function rollDie(numSides = 6){
    return Math.floor(Math.random()* numSides) +1
}

function greet (person, msg = 'Hey there'){
    console.log(`${msg}, ${person}!`)
}

const cats = ['Blue', 'Scout', 'Rocket'];
const dogs = ['Rusty', 'Wyatt']

const allPets = [...cats, ...dogs]

const feline = {legs: 4, family: 'Felidae'};
const canine = {isFurry: true, family: 'Caninae'}


const dataFromForm = {
    email: 'me@gmail.com',
    password: 'tobias123!',
    username: 'tfunke'
}

const newUser = {...dataFromForm, id: 235, isAdmin: false}


// function sum(){
//     return arguments.reduce((total,el) => total + el)
// }

function sum(...nums){
    return nums.reduce((total,el) => total + el)
}

function raceResults(gold, silver, ...everyoneElse){
    console.log(`gold medal goes to: ${gold}`)
    console.log(`silver medal goes to: ${silver}`)
    console.log(`thanks to everyone else: ${everyoneElse}`)
}

const scores = [68461, 344354, 7834, 6847, 6784, 5864]

const highScore = scores[0]
const secondScore = scores [1]

const [gold, silver, bronze, ...everyoneElse] = scores;

const user = {
    email: 'mefak@gmail.com',
    password: 'felsiegnEWFRW',
    firstName: 'Joca',
    lastName: 'Jocić',
    born: 1930,
    died: 1978,
    bio: 'Joca Jocić was a man',
    city: 'Grad',
    State: 'Država'
}

// const firstName=user.firstName;
// const lastName = user.lastName;
// const email = user.email;
// const{email, firstName, lastName, city, bio} = user;

// const {born: birthYear, died: deathYear} = user;

const user2 = {
    email: 'kfoea@gmail.com',
    firstName: 'Nena',
    lastName: 'Nenić',
    born: 1587,
    city: 'Tuzla',
    state: 'Bih'
}

const{city, state, died ='N/A'} = user2;