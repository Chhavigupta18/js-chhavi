

let myDate= new Date()
console.log(myDate);

console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
// let mycreatedate= new Date(2023,0,23)
// let mycreatedate= new Date(2023,0,23,5,3)
let mycreatedate= new Date("2023-01-14")
console.log(mycreatedate.toLocaleString());
console.log(mycreatedate.getTime());
console.log(Math.floor(Date.now()/1000));


let myTimeStamp= Date.now()
console.log(myTimeStamp);

let Newdate= new Date()
console.log(Newdate);

console.log(Newdate.getMonth()+1); // Here we add 1 coz month starts from index 0. So if we want to print january then it shows us 0 
                                   // but january is first month of the year so we add 1 to get the correct number of months. 
console.log(Newdate.getDay());

Newdate.toLocaleString('default',{
    weekday: "long",
    
})
// console.log(myDate);



