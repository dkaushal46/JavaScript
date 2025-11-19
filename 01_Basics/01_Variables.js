const accountId = 1823
let accountEmail = "Dddddd@gmail.com"
var password = "Password@123"
accountCity = "Jaipur"
let accountState

// accountId = 2  //Not allowed for constant

accountEmail ="AAAAA@Google.com"
password ="PPPPPP"
accountCity ="Kangra"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log(accountId);


console.table([accountId, accountEmail, accountCity, password, accountState])

console.log("Hello World") //hello world

s=6
console.log(s) //6
console.log(typeof(s))//number