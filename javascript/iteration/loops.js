// Create an array which consists of few names of your friends and use a for loop to iterate through the array and print out the contents.
let friends = [`Hinata`, `Shikamaru`, `Neji`, `Rock Lee`, `Sasuke`];

function myFriendsAre() {
    for (let i = 0; i < friends.length; i++) {
        console.log(friends[i]);
    }
}
myFriendsAre();

// Activity 2: Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
function whatNum (x, y) {
    const sumNums = x + y;
    // return sumNums;
    // console.log('Corey');
    if (sumNums >= 50 && sumNums <= 80) {
        return 65;
    }
    return 80;
}
console.log(whatNum(25, 50));
console.log(whatNum(25, 60));

function sayHello(name) {
    return "CORcoding";
    console.log(`hello ${name}`);
}

const returnValue = sayHello("Terry");
const returnValueTwo = sayHello("Barry");

console.log(returnValue);
console.log(returnValueTwo);


// function isVowel(str) { 
//     const vowel = /[aeiou]/gi;
//     if (str in vowel) {
//         return `True`;
//     } else {
//         return `False`;
//     }

// }
// isVowel("e");
// <input type="text" name="vowcheck"></input>



// Object Constructor function

function Car(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;

    this.changeColor = function(newColor) {
        this.color = newColor;
    }
}


let tesla = new Car(`Telsa`, 3, 2018, 'blue');
console.log(tesla);
console.log(tesla.make, tesla.year);
tesla.changeColor('yellow')
console.log(tesla)


// Constructor object using the class keyword.
class Cars {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    changeColor(newColor) {
        this.color = newColor;
    }
}

const myCar = new Cars("LEXUS", "LS500", 2022, "WHITE");
console.log(myCar);
myCar.changeColor("red");
console.log(myCar);