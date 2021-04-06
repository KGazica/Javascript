const myMath = {
    PI: 3.15159,
    square(num){
        return num*num;
    },
    cube(num){
        return num ** 3;
    }
}


const cat = {
    name: 'Blue Stelle',
    color: 'grey',
    breed: 'scottish fold',
    meow() {
        console.log("this is:", this)
        console.log(`${this.name} says meow`);
    }
}

const meow2 = cat.meow;