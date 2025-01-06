

const tinder= new Object() //or we can write in another way
const tinder2={}

tinder.Userid="123abc"
tinder.name="Chhavi"
tinder.isloggedin=false


console.log(tinder);
console.log(tinder2);

const regular={
    email:"chhavi18@gmail.com",
    fullname:{
        username:{
            id:"546",
            city:"delhi"
        }
    }
}
console.log(regular.id);
const obj1={1:"a",2:"b",3:"c"}
const obj2={4:"d",5:"e"}

// const obj3={obj1,obj2}
// console.log(obj3);                   // type1


// const obj3=Object.assign({},obj1,obj2)    //type 2
//     console.log(obj3);
    
const obj3={...obj1,...obj2}
console.log(obj3);


const obj4=[
    {email:"c15@mail.com",
     id:2,   
     name:"chhavi"
    },
    {email:"c15@mail.com",
        id:2,   
        name:"chhavi"
       },{email:"c15@mail.com",
        id:2,   
        name:"chhavi"
       },{email:"c15@mail.com",
        id:2,   
        name:"chhavi"
       }
]
// console.log(Object.keys(obj1));
// console.log(Object.values(obj2));
// console.log(Object.entries(obj1));
// console.log(tinder.hasOwnProperty('isloggedin'));


///////////////////////////////////DESTRUCTURE THE VALUES///////////////////////////////////////////////////////////////////

const course={
    name:"js",
    price:"999",
    courseinstructor:"hitesh"
}
console.log(course.courseinstructor);

//////////or 
const{courseinstructor:instructor}=course
console.log(instructor);

/////////////////////////////
///////////////////////////////////////////////JSON//////////////////////////////////////////////////

///          1} API IN THE OBJECT FORM

// {"name":"chhavi",
//    " coursename": "js",
//    " price":"free"

// }

/////           2} API IN ARRAY FROM
[
    {},
    {},          // MOST FAMOUS API (RANDOM USER ME)
    {}]





