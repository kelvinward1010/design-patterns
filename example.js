const a = 10;
const b = 5;

let c = a + b;
console.log(c)




const sum = (a, b) => a + b;
console.log(sum(10, 5))



// const user = {
//     name: 'Kelvin'
// };

function sum2(a,b){
    return a + b;   
}


// function User() {
//     return `I'm ${this.name}`
// }

// console.log(User.call(user))



const user2 = {
    firstName: 'John',
    lastName: 'Doe',
    getFullName: function () {
        return this.firstName + ' ' + this.lastName;
    }
};

console.log(user2.getFullName());


class User {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

const userxx = new User('John', 'Doe');
const userhhh = new User('kelvin', 'Ward');
console.log(userxx.fullName());