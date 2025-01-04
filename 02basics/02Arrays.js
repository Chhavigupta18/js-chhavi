

const marvel =["thor","ironman","spiderman"]
const dc=["superman","flash","batman"]

// marvel.push(dc)

// console.log(marvel);

// console.log(marvel.length);

 //if you want to access the "flash " element from the array then u need to do:
//   console.log(marvel[3][1]);
const allhero= marvel.concat(dc)
  console.log(allhero);
  console.log(allhero.length);
  console.log(allhero[4]);

  //or we can use instead of concat (mostly preferred method )
   const newheros= [...marvel,...dc]
   console.log(newheros);

   const arr1= [1,2,3,[4,5,6],7,[6,7,[4,5]]]
   const newarr1= arr1.flat(Infinity)
   console.log(newarr1);

   console.log(Array.isArray("hitesh"));
   console.log(Array.from("hitesh"));
   console.log(Array.from({name:"chhavi"}));         // intersting case for interview
   let score1=100
   let score2= 200
   let score3=300
   console.log(Array.of(score1,score2,score3));
   

   
   
  
  
