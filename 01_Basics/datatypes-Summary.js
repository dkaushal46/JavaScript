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