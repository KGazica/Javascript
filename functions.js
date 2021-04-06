function singSong(){
    console.log('DO')
    console.log('RE')
    console.log('MI')
}

function greet(firstName){
    console.log(`Hey there: ${firstName}!`.toUpperCase())
    // console.log('hi')
}

function repeat(str, numTimes){
    let result ='';
    for(let i=0; i<numTimes; i++){
    result += str;
}
console.log(result);
}


function add(x,y){
    if(typeof x !== 'number' || typeof y !== 'number'){
        return false;
    }
    let sum = x + y;
    return x +y;
}
// function rant(message) {
//     let upperCase = message.toUpperCase();
//     console.log(upperCase);
//     console.log(upperCase);
//     console.log(upperCase);
// }


// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()
// singSong()