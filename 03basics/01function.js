// console.log("h");
// console.log("i");
// console.log("t");
// console.log("e");
// console.log("s");
// console.log("h");

function myname(){

    console.log("h");
console.log("i");
console.log("t");
console.log("e");
console.log("s");
console.log("h");
}
myname()                 
 ///////////in the above line ('myname' is a reference of function and () it is an execution of function)

 function addtwonos(number1,number2){
    console.log(number1+number2);
    
 }
 const result= addtwonos(3,4)
 console.log("result",result); /////////IT SHOWS UNDEFINED////////////

 ////////////////////////////////WE WILL TRY BY THE FOLLOWING METHOD


 function addtwonos(number1,number2){
    let result= number1+number2
    return result
    console.log(result);
    
 }
 console.log("result",result); 
 

 function login(username){
    return `${username} just logged in `
 }
 console.log(login('Chhavi'));
 console.log(login(""));
 console.log(login( ));
 
 