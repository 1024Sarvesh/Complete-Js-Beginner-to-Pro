// arrays


const arr = ["sarvesh",18,true,"real"]
// console.log(arr)
// console.log(typeof arr)

// arr[2] = false
// console.log(arr)

// catch the all index of array using loop;

// const arr = ["sarvesh","b.sc","virat kohli","rohit sharma"];
// for(let i =0;i<arr.length;i++){
//     console.log(arr[i])
// }


//  using for off loop


// for(let list of arr){
//     console.log(list)
// }

//  using for in loop

// for(let index in arr){
//     console.log(arr[index])
// }


//  using foreach loop

// arr.forEach((element) => {
//     console.log(element)
// })




//  student marks in array find avg

const marks = [85,97,44,37,76,60];
// let sum = 0;
// for(let val of marks){
// sum += val;
// }
// let avg = sum/marks.length;
// console.log(avg)


// items price on offer print

const price = [250,645,300,900,50]
// let i = 0;
// for(let newprice of price){
// let offer = newprice/10;
// price[i] = price[i] - offer;
// console.log(price[i])
// i++;

// }

// for(let i =0;i<price.length;i++){
// let offer = price[i]/10;
// price[i] = price[i]-offer;
// console.log(price[i])
// }




// ---------------------------------------------------- array methods

// ------------------------push method

let fooditem = ["potato","tomato","brinjle","chilli"];
// fooditem.push("apple","banana","coconut")
// console.log(fooditem)


// ----------------------pop method

// fooditem.pop()
// console.log(fooditem)


//   --------------------------------------------------------------toString method

// const arrtostr = fooditem.toString()
// console.log(arrtostr)

// ---------------------------------------concat method

// const fooditem1 = ["burger","pizza","poha"]
// const concat = fooditem.concat(fooditem1)
// console.log(concat)


// ----------------------------------------------unshift method

// const add = fooditem.unshift("apple","guvava");
// console.log(add)


// ---------------------------------------------shift method

// const delte = fooditem.shift("potato")
// console.log(delte)


// -----------------------------------------slice method


// const slice = fooditem.slice(0,2)
// console.log(slice)


// ---------------------------------------splice method

// const number = [1,2,3,4,5,6,7]
// const splice = number.splice(1,3,8,9,10)
// console.log(number)


//  -----------------------------------------practice questions

// question 01


const company = ["bloomberg","microsoft","uber","google","ibm","netflix"]
// company.shift()
// console.log(company);
// company.splice(2,1,"ola");
// console.log(company)
// company.push("amazon")
// console.log(company)
