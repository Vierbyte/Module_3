// const API_KEY = 'sfdfvvfrvssdvfdfvsvsfvdv'

// if (true) {
//     const firstName = "Jerry";
//     console.log(firstName);
//     console.log(API_KEY);
//     if (true) {
//         let lastName = "Patterson";
//         console.log(lastName);
//         console.log(firstName);
//     }
//     // console.log(lastName); 
// }
// console.log(API_KEY);

// // var keyword sets global variables
// // aka globally scoped
// var firstName = "Troy";

// {
//   var firstName = "Mike";
//   console.log(firstName);
// }

// console.log(firstName);

// // let keyword is scoped to the code block it's confined in.
// // aka block scoped
// let lastName = "Troy";

// {
//   let lastName = "Mike";
//   console.log(lastName);
// }

// console.log(lastName);


// const sayName = function(name) {
//     console.log(name);
// }

// sayName("Corey");
// sayName("Kelli");

// const sayNameIs = (name) => {
//     console.log(name);
// }

// const sayNameIsWithoutParameters = () => {
//     console.log("Hello WO");
// }

// sayNameIs("Ronnie");
// // sayNameIs(`${sayName("kelli")} ${sayNameIs("Tim")}`);
// sayNameIsWithoutParameters();

// const sayNameOneParameter = name => {
//     console.log(name);
// }

// sayNameOneParameter("Milton")

// const sayNameSingleLineFunction = name => name;

// console.log(sayNameSingleLineFunction("Akana"))

// const test = (name = "Mike") => {
//     console.log(name);
// }

// test();
// test("Corey");

// const personInTheClubAge = (age = 21) => {
//     console.log(age);
// }
// personInTheClubAge();
// personInTheClubAge(25);


// const howManyWheels = (color = "black", wheels = 4) => {
//     console.log(wheels);
//     console.log(color, wheels);
// }
// howManyWheels();
// howManyWheels(8);
// howManyWheels("Blue", 10);

// const timesThree = (multiple = null, multi = 3) => {
//     for (a = 0; a < 10; a++) {
//         console.log(multiple * multi);
//     }
// };

// timesThree(10);
// timesThree();
// battleRoyal = () => {
// let protagonist = ["Naruto", " Luffy", " LeLouch", " Joker"];
// let antagonists = [" Madara", " Tech", " Charles", " Batman"];
// let fighters = [...protagonist, ...antagonists];
// let [vanguard, tanks, strategist, ...ops] = fighters
// [vanguard, tanks, strategist] = themBoys;
// let theOps = [ops]
// // const [veb, im, ...io] = fighters
//     // battleRoyal = fighters.map((currentValue) => `${currentValue}${s}`;
//     // let [vanguard, tank] = fighters
//     // return
//     // for (i =0; i < fighters.length; i++) {
//     // console.log(`The current value is ${themBoys}${'s'}`)

//     // }
    
// }
// // battleRoyal(themBoys);
// console.log(themBoys)
// regular object in Javascript
const ranking = {
    first: "Jimmy",
    second: "Sandy"
}
console.log(ranking.first)

// how to update key value pairs of an object using the . operator. below ex: ranking.first 
ranking.first = "Billy"

// how access the key value pairs of an object. Below ex: console.log(ranking.first)
console.log(ranking.first)

// Traditional way of creating a class in Javascript; known as a contructor class function.
function Car(paint) {
    this.running = false;
    this.color = paint;
    // method are functions that live on this class
    this.startengine = function() {
        this.running = true;
    }
}


// How to make a new instance of class. below ex: const honda = new Car(); 
const honda = new Car();

// how to call a class method. Below ex: honda.startengine()
honda.startengine()

console.log(honda)



// How to make a class using the class keyword in ES6 below ex:
class Bike {
    constructor(paint) {
        this.color = paint;
        this.manuel = false;
        this.speed = 0;
        this.moving = false;
    }
    // How to create a method on a constructor Class.
    peddle() {
        this.speed = 10;
        this.moving = true;
    }
}

const mountain = new Bike("red");
console.log(mountain)
mountain.peddle();
console.log(mountain)

// Class instance below ex: is Streetbike class inheriting constructor from Bike parent class.
class StreetBike extends Bike {
    constructor() {
        super("Blue")
    }
    foldable() {
        this.isFoldable = true;
    }
}

const myBike = new StreetBike();
console.log(myBike);
myBike.peddle();
myBike.foldable();
console.log(myBike)