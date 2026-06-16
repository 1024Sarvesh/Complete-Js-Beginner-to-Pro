// ------------------------------------------function in JS

// function newfunction(){
// console.log("Sarvesh Kumar");
// console.log("I am Learning JS")
// }
// newfunction()
// newfunction()

// -------------------- using parameter

// function myfunction(msg){  // parameter
// console.log(msg);
// }

// myfunction("I Love JS")// argument

// function - 2 numbers sum

// function sum (num1,num2){
//     let total = num1 + num2;
//     console.log(total);
// }
// sum(100,100)

// ------------------------------------arrow function

// const sum = (a,b)=>{
// return a+b;
// }

// const arrowsum = (a,b)=>{
//     console.log(a+b);
// }
// arrowsum(3,7)

// const mult = (a,b)=>{
// return a*b;
// }

// const arrowmult = (a,b)=>{
//     console.log(a*b);
// }
// arrowmult(3,7)

// string me se function banakar vowels print karao kisi bhi word me se

// function vowels(Str) {
//   let count = 0;
//   for (let value of Str) {
//     if (
//       value === "a" ||
//       value === "i" ||
//       value === "e" ||
//       value === "o" ||
//       value === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }
// vowels("sarvesh");
// vowels("kumar");
// vowels("apnacollage");

// ----------------------------------------or
// const vowels = (Str)=>{
//      let count = 0;
//   for (let value of Str) {
//     if (
//       value === "a" ||
//       value === "i" ||
//       value === "e" ||
//       value === "o" ||
//       value === "u"
//     ) {
//       count++;
//     }
//   }
//   console.log(count);
// }

// vowels("sarvesh")

// -------------------------------------------------------------ForEach loops in array
// const arr = [1,2,3,4,5,6,7,8,9]
// arr.forEach((value,i,arr)=>{
// console.log(value,i,arr)
// })

//    -------------------------------------------------------print square value of numbers
// const arr = [1,2,3,4,5,6,7,8,9,10]
// arr.forEach((val)=>{
//   let square = val**2;
//   console.log(square)

// })

// const calcsquare = (num)=>{
//     let square = num**2;
//     console.log(square)
// }
// arr.forEach(calcsquare);

// --------------------------------- same question using map methods

// arr.map((val)=>{
//   let square = val**2;
//   console.log(square)
// })

// --------------------------------------- even number print using filter method

// let evenarr = arr.filter((val)=>{
//   if(val%2===0){
//     return val
//   }
// })
// console.log(evenarr)

// ---------------------------------- reduce methods

// const sum = arr.reduce((pre,curr)=>{
//   return pre + curr;
// })
// console.log(sum)

// -------------------------------------largest number

// const large = arr.reduce((pre,curr)=>{
//    if(pre>curr){
// return pre;
// }else{
//     return curr;
//   }
// })
// console.log(large)

//----------------------------practice questions

// ----------------------------- question 1 filter 90+ score

// const number = [87,93,64,99,86,97,77];
// const maxnum = number.filter((val)=>{
//   if(val>90){
//     return val;
//   }
// })
// console.log(maxnum)

// --------------------------------------question 2 take number from users and create array 1 to user number

// let n = prompt("Enter A Number");
// const arr = [];
// for(let i =1;i<=n;i++){
// arr[i-1] =i;
// }
// console.log(arr)

// const sum = arr.reduce((pre,curr)=>{
//   return pre + curr;
// })
// console.log(sum)

// const factorial = arr.reduce((pre,curr)=>{
//   return pre * curr;
// })
// console.log(factorial)
