// ------------------------------------------- events in JS

// let btnEl = document.querySelector("#btn");
// btnEl.onclick = ()=>{
//     console.log("button was clicked")
// }

// let div = document.querySelector("#box");
// div.onmouseover=()=>{
// console.log("pointer is inside the div")
// }

// ---------------------------------------------event object

// let btnEl = document.querySelector("#btn");
// btnEl.onclick = (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX, e.clientY);
// };

// let div = document.querySelector("#box");
// div.onmouseover = (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX, e.clientY);
// };



// ------------------------------------------event listener

// let btnEl = document.querySelector("#btn");
// btnEl.addEventListener("click",(e)=>{
//  console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX, e.clientY);
//   console.log("handler1 was clicked")
// });


// btnEl.addEventListener("click",()=>{
//     console.log("handler2 was clicked")

// })
// const handler3 =()=>{
//     console.log("handler3 was clicked")

// }
// btnEl.addEventListener("click",()=>{
//     console.log("handler4 was clicked")

// })

// btnEl.removeEventListener("click",handler3)




// ------------------------------------------------------question1

// const mode = document.querySelector("#mode");
// let currentmode = "light";
// let body = document.querySelector("body");
// mode.addEventListener("click",()=>{
//     if(currentmode === "light"){
//         currentmode = "dark"
//         body.classList.add("dark")
//         body.classList.remove("light")
       
//     }else{
//         currentmode = "light"
//         body.classList.add("light")
//         body.classList.remove("dark")
//     }
//     console.log(currentmode)
// })
