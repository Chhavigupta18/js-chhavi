// singleton

//object literals

const mysymbol=Symbol("key")

const JSuser={
    name:"chhavi",
    age:24,
    location:"Delhi",
    email:"guptachhavi381@gmail.com",
    isloggedin:false,
    lastlogin:["monday","saturday"],
    [mysymbol]: "key1"


}
console.log(JSuser.email);
console.log(JSuser["email"]);
console.log(JSuser);
console.log(JSuser[mysymbol]);
JSuser.age=50
// Object.freeze(JSuser) // Now this object values cannot be changed
console.log(JSuser);

JSuser.greeting= function(){
    console.log("hello js user");
    
}
JSuser.greetingtwo= function(){
    console.log(`hello js user,${this.name}`);




    
}
console.log(JSuser.greeting());
console.log(JSuser.greetingtwo());










