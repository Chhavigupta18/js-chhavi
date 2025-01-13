
const num= [1,2,3,4,5,6,7,8,9,10]

const mynum= num.map( (num) => num+10 )
console.log(mynum);

// or

const number= num.map( (num) => {return num+10})
console.log(number);

//                      CHAINING                ///////

const num1= num.map( (num) => num*10).
                map( (num) =>num+1)
                .filter( (num) => num>=40)

                console.log(num1);
                