// ---------------------------------- async await uses

// function api(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Weather Data")
//             resolve("200 OK")
//         }, 2000)
//     }
// )}

// async function getWeatherData(){
//   await api();
//   await api();
// }



// --------------------------async await in callback----------------------------------




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


// async function getAllData(){
//     await getdata(1)
//     await getdata(2)
//     await getdata(3)
//     await getdata(4)
//     await getdata(5)
//     await getdata(6)
//     await getdata(7)
//     await getdata(8)
// }





// -------------------------------------IIFE Function---------------------
(async function getAllData(){
    console.log("Getting Data 1........")
    await getdata(1)
    console.log("Getting Data 2........")
    await getdata(2)
    console.log("Getting Data 3........")
    await getdata(3)
    console.log("Getting Data 4........")
    await getdata(4)
    console.log("Getting Data 5........")
    await getdata(5)
    console.log("Getting Data 6........")
    await getdata(6)
    console.log("Getting Data 7........")
    await getdata(7)
    console.log("Getting Data 8........")
    await getdata(8)
})();