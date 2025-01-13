

//  For Each ///////


// const coding=["js","rb","py","java",'cpp']
// coding.forEach( function (val){
// console.log(val);
// })

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++///////////////////////

// const code=["js","rb","py","java",'cpp']
// coding.forEach( (val )=>{
// console.log(val);
// })

////+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//////////////

// function printMe(item){
//     console.log(item);
    
// }
// const coding=["js","rb","py","java",'cpp']
// coding.forEach(printMe)

///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++////////

// const coding=["js","rb","py","java",'cpp']
// coding.forEach( (item,index,arr)=>{
// console.log(item,index,arr);

// })

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/////////

const arr= [
    {
        name:"chhavi",
        file:"js"
    },
    {
        name:"ishu",
        file:"py"
    },
    {
        name:"aadi",
        file:"html"
    }
]

arr.forEach( (item) => {
    console.log(item.name);
    
})