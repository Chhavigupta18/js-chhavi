
// const user={
//     username:"hitesh",
//     price:999,                                                        //THIS IS USED FOR CURRENT CONTEXT
//     welcome:function(){
//          console.log(`${this.username}, welcome to website`)
//         console.log(this);
        
        
//     }

// }

// user.welcome()
// user.username="sam"
// user.welcome()

////********************************************************************************************************////////////////// */

// const user={
//     username:"hitesh",
//     price:999,                                                        //THIS IS USED FOR CURRENT CONTEXT
//     welcome:function(){
//         console.log(`${this.username}, welcome to website`);
        
        
        
//     }

// }

// console.log(this);
///////****************************************************************************************************************/////////////////////////////////////////////////////////////////////////////////////////

// function chai(){
//     let username="hitesh"
//     console.log(this.username);
    
// }
// chai()

//**************************************************************************************************************** */

// const chai=function(){
//     let username="hitesh"
//     console.log(this.username);
    
// }
// chai()

/*************************************************************************************************************************** */

// const chai= () =>{
//         let username="hitesh"
//         console.log(this.userame);
        
//     }
//     chai()


    //******************************************************************************************************************* */

    //  const chai= () =>{
    //             let username="hitesh"
    //             console.log(this);
                
    //         }
    //         chai()

            //*********************************************************************************************************** */
                        //             END OF THIS /////////////////////////////////////////////////////////



                        ////////////////// ARROW FUNCTION///////////////////////////////

//     const add2=(num1,num2) =>{
//         return num1+num2
//     }                    
//    console.log(add2(1,5));
    //*************************************************************************************************************** */


    //                        IMPLICIT RETURN                        //
    
//     const add2=(num1,num2) => (num1+num2) 
                      
//    console.log(add2(1,5));

   /////////////           WHEN WE NEED TO RETURN OBJECT //////////////////////////////////

   const add2=(num1,num2) => ({USERNAME:"HITESH"}) 
                      
   console.log(add2(1,5));

   //////******************************************************************************************** */

   const array=[1,2,3,4,5]
   array.forEach(() => {})