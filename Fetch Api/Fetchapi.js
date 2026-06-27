const URL = "https://api.ai-cats.net/v1/cat";


const getFacts = async ()=>{
    let response = await fetch(URL)
    console.log(response)
console.log(response.status)

let data = await response.json();
// console.log(data[0])
document.getElementById("container").src = data.text;
}


// function getImg(){
//     fetch(URL).then((response)=>{
//         return response.json()
//     }).then((data)=>{
//         console.log(data)
//         document.getElementById("container").src = data.url;
//     })
// }