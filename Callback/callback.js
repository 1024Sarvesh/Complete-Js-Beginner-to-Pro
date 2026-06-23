
// ---------------------------------------- Synchronous Programming-----------------

// console.log("one")
// console.log("two")
// console.log("three")


// --------------------------------------------Asynchronous Programming---------------


// console.log("one")
// console.log("two")

// setTimeout(() => {
//     console.log("hello")
// }, 3000);
// console.log("three")
// console.log("four")


// --------------------------------------------------callbacks-------------------------------

// function sum(a,b){
// console.log(a+b)
// }


// function calculator(a,b,sum){
// sum(a,b)

// }

// calculator(2,3,sum)


// ---------------------------------------------- callback hell-----------------------

function getdata(dataId,getNextData){

    setTimeout(()=>{
        console.log(`data ${dataId}`)
        if(getNextData){
            getNextData();
        }
    },2000)
}
// callback hell
getdata(1,()=>{
    getdata(2,()=>{
        getdata(3,()=>{
            getdata(4,()=>{
                getdata(5)
            })
        })
    })
})
