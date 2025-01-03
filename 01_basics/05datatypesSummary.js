// Types of Primitive data types
// STRING, Number, Boolean, BigInt, Null, Undefined, Symbol

const score=100 
const scoreValue =100.03
const isLOggedin= false
const Temp=null
let state;
const id=Symbol("123")
const anotherid = Symbol("123")
console.log(id===anotherid)
const bigNumber=15428765455446544545n
console.log(typeof bigNumber)



//Non primitive Data types/ Reference Data types
// Array, Object, Function

const heros=["shaktiman", "naagrj","doga"]
const obj= {
            name:"chhavi",
            age:56,
            state:"delhi"
}

const myFunction= function(){
    console.log("hello world");
    
}

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++


// Two types of memories are:
//Stack (Primitive) ,Heap (Non-Primitive)

//UNDERSTANDING OF STACK
let myYoutube = "Chhavigupta"
let anothername= myYoutube
anothername= "chaiaurcode"
console.log(myYoutube)
console.log(anothername);


//UNDERSTANDING OF HEAP
let userOne ={
    email: "user@google.com",
    upi:"user@ybl",
}


let usertwo=userOne
usertwo.email="chhavi155@gmail.com"
console.log(userOne.email);
console.log(usertwo.email);


