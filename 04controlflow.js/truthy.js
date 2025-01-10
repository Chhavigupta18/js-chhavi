
// CASE 1
const useremail= "cg155@mail.com"

if(useremail){
    console.log('got user email');
    
}else{
    console.log('dont have user email');
    
}
if(useremail.length ===0){
console.log('Array is empty');

}

// CASE 2
const email= ""

if(email){
    console.log('got user email');
    
}else{
    console.log('dont have user email');
    
}
// CASE 3
const email1= []

if(email1){
    console.log('got user email');
    
}else{
    console.log('dont have user email');
    
}
// Case 4

const emptyObj= {
}
if(Object.keys(emptyObj).length===0){
    console.log('object is empty');
    
}

//  FALSY VALUES ( FALSE, 0,-0,BigInt(0n), Empty string, Null, Undefined, NAN )
// TRUTHY VALUES ("0", "FALSE"," ", [], {}, Function(){},)
