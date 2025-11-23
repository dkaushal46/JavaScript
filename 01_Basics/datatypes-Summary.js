// Primitive

// 7 types : String, Number, Boolearn, null, undefined, Symbol,BigInt

const name ="Dikshansh"
const number=13341
const boy = true
const outsideTemp = null

const id = Symbol('123')    //will give false because even same character symbol are different
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

//Array, Objects, Functions


const heros =["Ironman" ,"Batman"];

let myObj ={
    Naam :"Dikshansh",
    Age :22
}

const myFunction = function(){
    console.log("Hello world");
}


//+++++++++++++++++++++++++++++++++++++

//Memory Type
//Stack (Primitive) String, Number, Boolearn, null, undefined, Symbol,BigInt

let nameTwo = "Jiggg";
let homeName = nameTwo;

homeName = "JIGG"; //copy will be changed

console.log(nameTwo);
console.log(homeName);//homename is changed because memory is stored in temp memory

//Heap (Non Primitive) Array, Objects, Functions

let customerOne ={
    id: 1,
    mail: "jigg@gmail.com"
}

let customerTwo =customerOne
customerTwo.id=2 //original value wii be changed in heap

console.log(customerOne.id); 
console.log(customerTwo.id); //id is same because heap has one memory only no temporary