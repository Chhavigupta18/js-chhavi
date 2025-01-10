 
 // IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)//

//  function chai(){
//     console.log(`DB CONNECTED`);
    
//  }
//  chai()

 //                                  or                           //////////

 (function chai(){
    console.log(`db connected`);
    
 })();

 ((name)=> {
   console.log(`print ${name}`);
   
 })(`hitesh`)