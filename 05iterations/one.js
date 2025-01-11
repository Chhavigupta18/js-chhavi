
// FOR LOOP SYNTAX

// for (let i = 0; i < array.length; i++) {
//     const element = array i];
// }

//************************************************************************************************************************** */

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
    
// }

//*************************************************************************************************************************** */


// for (let i = 0; i < 10; i++) {
//     const element = i;
//     if( element==5){
//         console.log(`5 is the best number`);
        
//     }
//     console.log(element);
    
// }

/////******************************************************************************************************************************* */

// for (let i = 0; i < 10; i++) { 
//     console.log(`Outer loop value:${i}`);
    
//     for (let j = 0; j <= 10; j++) {
//        console.log(`Inner loop value:${j} and inner loop ${i}`);

//        for (let k = 0; k <= 5; k++) {
//         console.log(` Innermost loop value ${k} and inner loop ${j}`);
//         ;
        
//        }
       
        
//     }
    
    
// }


//*/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// for (let i = 0; i <= 10; i++) {
//     console.log(`Outer loop value:${i}`);
//     for (let j = 0; j <=10; j++) {
    
// console.log(i + '*'+ j + ' =' + i*j);
        
//     }
    
   
    
// }


//************************************************************************************************************************************************ */

// let myarr=["flash ", "batman","superman"]
// console.log(myarr.length);

// for (let i = 0; i < myarr.length; i++) {
//     const element = myarr[i];
//     console.log(element);}
    


//*********************************************************************************************************************************** */

//  Break and Continue

for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log(` detected 5`);
        break
        
    }
    console.log(i);
    
    
}
for (let i = 1; i <= 20; i++) {
    if(i==5){
        console.log(` detected 5`);
       continue
        
    }
    console.log(i);
    
    
}



