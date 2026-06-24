// const promise = new Promise((resolve,reject)=>{
//     console.log("I am a Promise")
//     // resolve("success")
//     reject("some error occured")
// })

// -------------------------then and catch

// const getPromise = ()=>{
//    return new Promise((resolve,reject)=>{
//     console.log("I am a Promise")
//     // resolve("success")
//     reject("some error occured")
// })
// }

// let promise = getPromise();

// promise.then((res)=>{
//     console.log("accepted",res)
// })

// promise.catch((err)=>{
//     console.log("rejected",err)
// })

// ---------------------------------------Promise Chain-------------------------------
function asyncFunc1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data1");
      resolve("success");
    }, 4000);
  });
}
function asyncFunc2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Data2");
      resolve("success");
    }, 4000);
  });
}
// console.log("Fetching Data .....")
// let P1 = asyncFunc();
// P1.then((res)=>{
//       console.log(res)
// })

// ----------------------------------------------------promise chain---------------------------

// console.log("Fetching Data1 ......")
// asyncFunc1().then((res)=>{
//     console.log("Fetching Data2 ......")
//     asyncFunc2().then((res)=>{})
// })

// ------------------------------callback hell

function getdata(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`data ${dataId}`);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}

// Promise Chain

// console.log("Loading Data1.........")
// getdata(1).then((res)=>{
//     console.log(res)
//     console.log("Loading Data2.........")
//     getdata(2).then((res)=>{
//         console.log(res)
//     })

// })

getdata(1)
  .then((res) => {
    return getdata(2);
  })
  .then((res) => {
    console.log(res);
  });

//  callback hell

// getdata(1,()=>{
//     getdata(2,()=>{
//         getdata(3,()=>{
//             getdata(4,()=>{
//                 getdata(5)
//             })
//         })
//     })
// })
