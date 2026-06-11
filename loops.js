//  ---------------------------------------------------------------loops
// -------------------------for loop


// for(let count = 1;count<=5;count++){
// console.log("sarvesh kumar")
// }

// let n = 8;
// let sum = 0;
// for(let i = 1;i<=n;i++){
//     sum = sum + i;
// }
// console.log(sum)



// -----------------------------while loop

// let i = 1;
// while(i<=10){
//     console.log(i)
//     i++;
// }


// -------------------------do-while loop

// let i = 1;
// do{
//     console.log("sarvesh kumar");
//     i++;
// }while(i<=10)




// ---------------------for-of loop


// let Str = "SarveshKumar"
// let size = 0;
// for(let i of Str){
// console.log(i)
// size++;
// }
// console.log(`Size of ${Str} is ${size}`)



// ---------------------------for-in loop

// let student = {
//     name:"sarvesh",
//     class:"hb",
//     age:"18"
// }

// for(let key in student){
//     console.log("key = " + key + ", Value = " + student[key])
// }



    // let num = 0;
    // while(num<=100){
    //     let number;
    //    if(num%2 === 0){
    //     console.log(num)
    //    }
    //     num++;
    // }



    let gameNum ="35";
   let UserNum= prompt("guess the gameNum");
   while(UserNum !== gameNum){
     UserNum= prompt("You Entered Wrong Num. guess Again");
   }
   console.log("congratulations you entered the right number")
