// console.log("Hello World!")
// window.console.log("sarvesh")

// console.dir(window.document.childNodes[1])

// -------------------------------------------------------document.getElementById

// let buttonEl = document.getElementById("my-id")
// console.log(buttonEl)
// console.dir(buttonEl)


// --------------------------------------document.getElementsByClassName


// let headings = document.getElementsByClassName("my-class");
// console.log(headings)
// console.dir(headings)


// -----------------------------------------------document.getElementsByTagName


// let parahs = document.getElementsByTagName("p");
// console.log(parahs)
// console.dir(parahs)


// --------------------------------------------querySelector


// let FirstEl = document.querySelector("p");  // 1st element
// console.dir(FirstEl)


// -----------------------------------------------querySlecterAll


// let AllElements = document.querySelectorAll("p");  // nodelist
// console.dir(AllElements)



// --------------------------------------TagName

// const pEl = document.querySelector("div");
// let text = pEl.innerText = "Sarvesh Kumar";
// console.log(pEl.innerHTML) 
// console.log(text)

// const div = document.querySelector("div")
// console.dir(div)


// const h1El  = document.querySelector("h1")
// console.log(h1El)








// ------------------------------------------------qestion1

// const h2El = document.querySelector("h2");
// h2El.innerText = h2El.innerText + " from apna collage students";




// ------------------------------------------------question2

const divEl = document.getElementsByClassName("box");
let idx = 1;
for(let divs of divEl){
divs.innerText = `new unique value of ${idx}`
idx++;
}