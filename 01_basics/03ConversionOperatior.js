//let score=33
//or
// let score="33abc"
//or
// let score=null
//or
// let score=undefined
//or
// let score=true
// or 
let score = "Chhavi"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

console.log(valueInNumber)


//Conversions
// "33"=> 33
//"33abc"=NaN (not a number)
// null=0
//undefined=>
//true=>1; false=>0
////////////////////////////////////////////////////////////////////////////////////////////////////////


//CONVERSION OF DATATYPES INTO BOOLEAN


// let isLoggedIn= 1
// let isLoggedIn=0
// let isLoggedIn=""
let isLoggedIn = "Chhavi"
let booleanIsloggedIn = Boolean(isLoggedIn)
console.log(booleanIsloggedIn);

/////////////////////////////////////////////////////////////////////////////////////////
//CONVERSION INTO STRING

// let a=33
// let a="33"
// let a=true
// let a=false
// let a= null
let a = undefined
let string = String(a)
console.log(typeof string);

///***********************************OPERATIONS******************************************************* */


let value = 3
let negvalue = -value
console.log(negvalue);
console.log(2 + 20)
console.log(2 - 2)
console.log(2 * 2)
console.log(2 ** 3);
console.log(2 / 3);
console.log(2 % 3)

let str1="Hi"
let str2= " Chhavi"
let str3= str1+str2    
console.log(str3)       //output=Hi Chhavi
console.log(1+"2");     //output=12
console.log("1"+2);     //output=12
console.log("1"+"2");   //output=12
console.log("1"+2+2);  //output=122
console.log("1"+(2+2)); // we use paranthesis and got diff ans from the above variable
console.log(2+2+"1");  //output =41
console.log(3+4*5%3);
console.log(((3+4)*5)%3);
console.log(+true);
console.log(+"");
let num1,num2,num3
num1=num2=num3=8+8
let gamecounter=100
gamecounter++
console.log(gamecounter)













