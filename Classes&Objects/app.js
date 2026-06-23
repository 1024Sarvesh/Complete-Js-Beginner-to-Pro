// const student = {
//     FullName:"Sarvesh Kumar",
//     Marks:"95",
//     PrintMarks:function(){
//         console.log(`marks = ${this.Marks}`)// this.Marks ka matlab hai ki student.marks
//     }
// }



// ------------------------------make own prototype-----------------------------

// const employee = {
//     calcTax(){
//         console.log("Tax rate is 10%")
//     }
// }

// const Sarvesh = {
//     salary:"50000"
// }
// const Sarvesh1 = {
//     salary:"50000"
// }
// const Sarvesh2 = {
//     salary:"50000"
// }
// const Sarvesh3 = {
//     salary:"50000"
// }

// Sarvesh.__proto__ = employee;
// Sarvesh1.__proto__ = employee;
// Sarvesh2.__proto__ = employee;
// Sarvesh3.__proto__ = employee;

// --------------------------------------- to create object use Classes--------------------


// class ToyotaCar{
//     constructor(brand,milage){
//         console.log("creating new object")
//         this.brand = brand;
//         this.milage = milage;
//     }
//     start(){
//         console.log("start")
//     }
//     stop(){
//         console.log("stop")
//     }

// }

// const Fortuner = new ToyotaCar("Fortuner",12);
// console.log(Fortuner)
// const lexus = new ToyotaCar("Lexus",10);
// console.log(lexus)




// ----------------------------------------- inheritence--------------------------


// class parent{
//     hello(){
//         console.log("Hello")
//     }
// }

// class child extends parent{}
// let NewObj = new child()




// class Person{
//     constructor(){
//        this.species = "homo sapiens"
//     }
//     eat(){
//         console.log("eat")
//     }
//     sleep(){
//         console.log("sleep")
//     }
//     work(){
//         console.log("Do Nothing")
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("solve problems,built something")
//     }
// }
// class Doctor extends Person{
//     work(){
//         console.log("Treat Parents")
//     }
// }

// let SarveshObj = new Engineer();
// let p1 = new Person();
// let e1 = new Engineer()


// -----------------------------------Super Keywords-----------------
// class Person{
//     constructor(){
//        this.species = "homo sapiens"
//        console.log("Enter Parent Contructor")
//     }
//     eat(){
//         console.log("eat")
//     }
// }


// class Engineer extends Person{

//     constructor(branch){
//         console.log("Enter Child Contructor")
//         super();   //to call the parent class constructor
//         this.branch = branch;
//         console.log("Exit Child Contructor")
//     }

//     work(){
//         console.log("solve problems,built something")
//     }
// }

// let engObj = new Engineer("chemical engineer");

// console.log(engObj)







// class Person{
//     constructor(name){
//        this.species = "homo sapiens"
//        this.name = name;
//     }
//     eat(){
//         console.log("eat")
//     }
// }


// class Engineer extends Person{

//     constructor(name){
//         super(name);   //to call the parent class constructor
       
//     }

//     work(){
//         super.eat();
//         console.log("solve problems,built something")
//     }
// }

// let engObj = new Engineer("Sarvesh ");

// console.log(engObj)





// ------------------------------------question 1-------------------------------
// you are creating a website for your collage. create a class User with 2 properTies , name and email. it also has a method called viweData() that allows to user to viwe your data?

// const DATA = "secret information";

// class User{
    //     constructor(name,email){
        //         this.name = name;
        //         this.email = email;
        //     }
        
        //     viewdata(){
            //         console.log("website data is ", DATA)
            //     }
            
            // } 
            
            
            // let stu1 = new User("Sarvesh","a@agmail.com")
// let stu2 = new User("Sarvesh Kumar","a@akgmail.com")








// ------------------------------------------------------question 2----------------------
// create a new class called admin which inherits from User . add new mthod called editdata to admin that allows it to edit in website?

// const DATA = "secret information";
// class User{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }

//     viewdata(){
//         console.log("website data is ", DATA)
//     }

// } 

// class Admin extends User{

//     constructor(name,email){
//         super(name,email)
//     }

//     editData(){
//         DATA:"some new value"
//     }
// }

//  let stu1 = new User("Sarvesh","a@agmail.com")
// let stu2 = new User("Sarvesh Kumar","a@akgmail.com")

// let admin1 = new Admin("dean","dean@collage.com")




// ---------------------------------------ERROR HANDLING---------------------------


// a = 8;
// b = 10;
// console.log(a+b)
// console.log(a-b)
// try{

//     console.log(a-c)
// }catch(err){
//     console.log(err)
// }
// console.log(a*b)
// console.log(a/b)
// console.log(a%b)