// let random = Math.random();
// if (random < 0.5) {
//     console.log("your number is less than 0.5!!");
// } else {
//     console.log("your number is greater than 0.5")
// }    console.log(random);

// const dayOfWeek = prompt('Enter a day').toLowerCase();
// 'monday'

// if (dayOfWeek === 'Monday'){
//     console.log(" ughh I hate Monday")
// } else if (dayOfWeek === 'Saturday'){
//     console.log("Yay i love saturdays")
// } else if( dayOfWeek === 'Friday') {
//     console.log("Fridays are decent, especially after work")
// } else {
//     console.log("meh")
// }


// 0-5 - free 
// 5-10 child $10
// 10-65 adult $20
// 65+ senior $10

// const age = 89;

// if (age<5){
//     console.log("you are a baby, you get in for free")
// } else if(age<10){  
//     console.log("you are a child, you pay $10")
// } else if(age<65){  
//     console.log("you are an adult, you pay $20")
// } else{
//     console.log("You are a senior. You pay $10")
// }

const password = prompt("please enter a new password")

// password must be 6 characters
if(password.length >= 6) {
    //password cannot include space
    if (password.indexOf(' ') === -1){
        console.log('Valid password')
    } else {
        console.log("password cannot contain spaces")
    }
} else {
    console.log("password too short. must be 6+ characters")
}

