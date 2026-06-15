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

// const divEl = document.getElementsByClassName("box");
// let idx = 1;
// for(let divs of divEl){
// divs.innerText = `new unique value of ${idx}`
// idx++;
// }


// ------------------------------------------------getAttribute

// const div = document.querySelector("div");
// console.log(div)

// let val = div.getAttribute("id");
// console.log(val)
// let name = div.getAttribute("name");
// console.log(name)


// const pEl = document.querySelector("p");
// console.log(pEl);
// const pclass = pEl.getAttribute("class")
// console.log(pclass)


// // ----------------------------------------------setAttribute

// let newclass = pEl.setAttribute("class","newclass");
// console.log(newclass)


// // ---------------------------------------node.style

// div.style.backgroundColor = "red";
// div.style.backgroundColor = "purple";
// div.style.fontSize = "24px";
// div.innerText = "HELLO!";


// ------------------------------------------------- insert & delete Elements


// const ButtonEl = document.createElement("button");
// ButtonEl.innerText = "Click me!";
// let div = document.querySelector("div");
// // div.append(ButtonEl)
// // div.prepend(ButtonEl)
// // div.before(ButtonEl)
// div.after(ButtonEl)


// const H1El = document.createElement("h1");
// H1El.innerHTML = "<i>Hi! I am New</i>"
// document.querySelector("body").prepend(H1El)


// let pEl = document.querySelector("p");
// pEl.remove();

// H1El.remove()


// -------------------------------------------------------question 1

// const btnEl = document.createElement("button");
// btnEl.innerText = "click me!";
// btnEl.style.backgroundColor = "red";
// btnEl.style.color = "white";
// btnEl.style.border = "none";
// btnEl.style.cursor = "pointer";
// document.querySelector("body").prepend(btnEl)



// ----------------------------------------------------------question 2


// const pEl = document.querySelector("p")
// console.log(pEl.getAttribute("class"))
// console.log(pEl.setAttribute("class","newclass"))
// console.log(pEl.classList.add("newclass"))
// console.log(pEl.classList.remove("newclass"))





// ----------------------------------------- mdn code 



const div = document.createElement("div");
div.classList = "foo"; // forwarded to classList.value

// our starting state: <div class="foo"></div>
console.log(div.outerHTML);

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("another-class");

// <div class="another-class"></div>
console.log(div.outerHTML);

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
let i = 5;
div.classList.toggle("visible", i < 10);

// false
console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");