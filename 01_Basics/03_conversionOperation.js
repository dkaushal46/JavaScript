let score1 ="33ewr"
let score2 = 33


// console.log(typeof score1)
// console.log(typeof score2)

let converted = Number(score1)
// console.log(typeof converted)
// console.log(converted)

// "33" => 33
//"33abc" => NaN
// true => 1; false => 0

//************** Operations **************//

let value =3
let negValue =-value
//console.log(typeof negValue);


// console.log(2+2); //add
// console.log(2-2); //subtract
// console.log(2*2); //multiply
// console.log(2/2); //divide
// console.log(2**3); //2 power 3
// console.log(2%3); //remainder


let str1 = "Hello"
let str2 = " World"
// console.log(str1+str2)

// console.log("1" + 2); 
// console.log(1 + "2"); 
// console.log("1" + 2 + 3); //2 and 3 are treated as string
// console.log(1 + 2 + "3"); //1 and 2 are number then 3 is string
// console.log(1 + 2 + "3" + 6 + 6) //6 and 6 are treated as string(after 3)

//PREFIX (++a)
let a =5
console.log(a); // 5
let b= ++a //a incremented first then value set
console.log(a); // 6
console.log(b); // 6



//POSTFIX (a++)
let c= 5
console.log(c); //5
let d= c++  //value of d is 5 and c is 6 d value set first then c is incremented
console.log(c); //6
console.log(d); //5