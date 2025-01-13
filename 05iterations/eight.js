// 

///////////////////////           REDUCE METHO         ///////////////////

//const num=[1,2,3,4]
// const newnum= num.reduce(function(accumulator, currentvalue){
//     console.log(`accumulator: ${accumulator} and cuurent value: ${currentvalue}`);
    
//     return accumulator+currentvalue
// },0)

// console.log(newnum);


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// const num=[1,2,3,4]
// const number = num.reduce(function(accumulator, currentvalue){
//     console.log(`accumulator: ${accumulator} and cuurent value: ${currentvalue}`);
    
//     return accumulator * currentvalue
// },1)

// console.log(number);
 

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Write in arrow function

// const num=[1,2,3,4]
// const total= num.reduce( (acc, currval) => acc+currval , 0)
// console.log(total);


///++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++/////////

const shopping=[
    
    {itemname: "js",
        price:3000
    },
    {itemname: "java",
        price:2000
    },
    {itemname: "py",
        price:1000
    },
    {itemname: "css",
        price:3500
    },
]

const add=  shopping.reduce( (acc,item) => acc+ item.price ,0 )
console.log(add);
