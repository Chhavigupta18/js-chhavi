// let a = 10
// const b=20
// var c=30

{ }  // scope 

if (true){
    let a =10
    const b=20
    var c=30

}

// console.log(a);
// console.log(b);
console.log(c);

function one(){
     const username="Chhavi"
     function two(){
        const website="utube"
        console.log(username);
        
     }
    //  console.log(website);
     two()
     
}
one()


if(true){
    const username="hitesh"
    if(username=="hitesh"){
        const website="youtube"
        console.log(username+website);
        
    }
    // console.log(website);
    
}
// console.log(username);

function addone(value){
    return value+1
}
addone(5)

const addtwo= function(value){
    return num +2
}
addtwo()