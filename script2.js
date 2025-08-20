// arithmatic operators
// let a = 5;
// let b = 2;

// console.log("a+b=", a + b);
// console.log("a=", a, "& b =", b);

// console.log("a-b=", a - b);
// console.log("a*b=", a * b);
// console.log("a/b=", a / b);
// console.log("a%b=", a % b);
// console.log("a**b=", a ** b);

// Unary Operator
// let a = 5;
// let b = 2;
// console.log("a=", a, "& b =", b);

// console.log("--a= ", --a);
// console.log("a=", a);

// Assignment Operators
// let a = 5;
// let b = 2;

// a**= 4; // a = a**4
// console.log("a=", a); //9
// Comparison Operators
// let a = 5;
// let b = 3;

// console.log("5<3", a<b);//false

// Logical Operators
// let a = 6;
// let b = 5;

// let cond1 = a>b; //true
// let cond2 = a === 6; //true
// console.log("cond1 && cond2 =", cond1 && cond2);

// Conditional Statement

// let age = 17;

// if (age>=18) {
//     console.log("you can vote");
// }

// if(age<18) {
//     console.log("you CANNOT vote");
// }


//  let mode = "light";
//  let color;

//  if(mode==="dark"){
//      color = "black";
//  }else{
//      color="white";
//  }
//  console.log(color);

// odd or even
// let num = 17;

// if (num%2===0){
//     console.log(num,"is even");
// }else{
//     console.log(num,"is odd");
// }

// Conditional Statements

// let mode="dark";
// let color;

// if (mode==="dark"){
//     color="black";
// }else if(mode==="blue"){
//     color="blue";

// }else if(mode==="pink"){
//     color="pink";
// }else{
//     color="white";
// }

// console.log(color);
// if(mode==="dark"){
//      console.log(mode);
// }


// let age = 25;

// let result = age>=18? "adult": "not adult";
// console.log(result);


// let score = prompt ("enter a score:");
// let grade;
// if(score>=80 && score<=100 ){
//     console.log(grade, "is A");
// }else if (score>=70 && score<=89) {
//     console.log(grade,"is B");
// } else if (score>=60 && score<=69){
//     console.log(grade,"is C");

// }else if (score>=50 && score<=59){
//     console.log(grade,"is D");
// }else{
//     console.log(grade,"is F");
// }

// let num = prompt("enter a number:");
// if(num % 3 === 0){
//     console.log ("yes");
// }else{
//     console.log("no");
// }


// for(let count=1; count<=5;count++){
// console.log("Apna College");
// }

// console.log("loop has ended");

//  calculate sum of 1 to n
// let sum=0;
// n=899747;

// for (let i=1;i<=n;i++){
//     sum=sum+i;
// }
// console.log("sum=",sum);

// for(let i=1;i<=5;i++){
//     console.log("i=",i);
// }

// for(let i=1;i>=0;i++){
//     console.log("i=",i);
// }

// let i=1;
// while(i<=5){
//     console.log("i=",i);
//     i++;
// }
// let i = 20;
// do{
//     console.log("pookie");
//     i++;
// }while(i<=15);
// for of loop
// let str="pookie";

// for(let i of str){
//     console.log("i=",i);
// }

// for in loop

// let student={
//     name: "Rahul Kumar",
//     age: 20,
//     cgpa: 7.5,
//     isPass: true
// };

// for(let key in student){
//     console.log("key=",key,"value=", student[key]);
// }
    

// for (let num=0; num<=100;num++){
//     if(num%2!==0){
//         // odd number
//         console.log("num=",num);
//     }
// }

// let gameNum=25;
// let userNum= prompt("Guess the game number:");
//  while(userNum!=gameNum){ //game
//    userNum= prompt("You entered wrong number.Guess the game number:");

// }
// console.log("congratulations! you entered the right number");

// strings
// let str="bubu";
// let str2="pookie";

// let str="pookiemunu";
// console.log(str[9]);

// template Literals
// let specialString= 'This is a template literal';
// console.log( typeof specialString);

// let obj={
//     item:"pen",
//     price: 10,
// };
// let output='the cost of ${obj.item} is ${obj.price} rupees';
// console.log(output);
// console.log("the cost of",obj.item,"is",obj.price,"rupees");

// let str="pookie\tbubu";
// console.log(str.length);

// let str="ApnaCollege";
// str=str.toUpperCase();
// console.log(str);
// console.log(newStr);

// let str="hello";
// console.log(str.slice(0,3));

// let str1="shree";
// let str2=" jata";
// let res=str1+str2;
// console.log(res);

// let str1="shree";
// let str2="jata";
// let res="she is "+ str1+str2;
// console.log(res);

// let str = "hello";
// console.log(str.replace("he","she"));

// let str="Iloveyou";

// console.log(str.charAt(3));

// let str="Iloveyou";

// console.log(str[0]);

// let fullName=prompt("enter your fullname without spaces");
// let username="@"+ fullName +fullName.length;
// console.log(username);

// let marks=[97,82,75,64,36];
// console.log(marks);
// console.log(marks.length);
  
// let heroes= ["ironman","thor","hulk","shaktiman","spiderman","antman"];l

// for(let i=0; i<heroes.length; i++){
//     console.log(heroes[i]);
// }

// let cities=["delhi","pune","mumbai","hyderabad","gurgaon"];

// for(let city of cities){
//     console.log(city.toUpperCase());
// }

// let marks=[85,97,44,37,76,60];

// let sum=0;

// for(let val of marks){
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log('avg marks of the class= ${avg}');


// let items=[250,645,300,900,50];
// let idx=0;
// for(let value of items){
//     console.log('value at index &{idx}=${val}');
//     let offer= val/10;
//     items [idx] =items[idx] - offer;
//     console.log('value after offer=${val}');
//         idx++;
// }


// let fooditems=["burger","pizza","pasta","sandwich","fries"];
// fooditems.push("noodles", "spring rolls");
// console.log("fooditems");

// let fooditems=["burger","pizza","pasta","sandwich","fries"];
// console.log("fooditems" );
// let deletedItem = fooditems.pop();
// console.log("fooditems");
// console.log("deleted", deletedItem);

// let marvelHeroes = ["ironman", "thor", "hulk", "spiderman"];
// let dcHeroes = ["batman", "superman"];

// let heroes = marvelHeroes.concat(dcHeroes);
// console.log( heroes);

// let marvelHeroes = ["ironman", "thor", "hulk", "spiderman"];
// marvelHeroes.unshift ("captain america");
// let val = marvelHeroes.shift();
// console.log("deleted", val);
// let marvelHeroes = ["ironman", "thor", "hulk", "spiderman"];
// console.log(marvelHeroes);
// console.log(marvelHeroes.slice(1, 3)); 
// let arr=[1, 2, 3, 4, 5, 6, 7]

//arr.splice(2,2,101,102);
//Add Element
//arr.splice(2, 0, 101);
// Delete Element
// 
//arr.splice(3,1);

//replace element
//arr.splice(2, 1, 100);

// let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// companies.push("Amazon");


// function sayHello() {
//     console.log("Hello, World!");
// }

// function greet(name) {
//     console.log("Hello, " + name + "!");
// }

// greet("Shreejata");
//function → keyword

// functionName → any name you give

// parameters → optional input values

// {} → block of code that runs when called
// function functionName(parameters) {
  // code block
// }

// function add(a, b) {
//     return a + b;
// }

// let result = add(5, 3);
// console.log(result);

// const multiply = function(x,y) {
//     return x * y;
// };

// console.log(multiply(4, 5));

// const square = (n)=> {
//     return n * n;
// };

// console.log(square(6));

// function greet(name = "Guest") {
//     console.log("Hello, " + name);
// }

// greet(); 

// function outer() {
//     function inner() {
//         console.log("I'm inside"); 
//     }
//     inner();
// }
// outer();

// function show(){
//     let message = "Hi!";
//     console.log(message);

// }

// show(); 

// let name= "Shreejata";

// function display() {
//     let age=20;
//     console.log(name);
//     console.log(age);
// }

// display();

// function greet(name) {
//     console.log("Hello, " + name);
// }
// function processUser(callback){
//     const userName = "Shree";
//     callback(userName);
// }

// processUser(greet);

// setTimeout(function() {
//     console.log("3 seconds passed!");
// }, 3000); 

// setTimeout(() => {
//     console.log("Done");
// }, 2000);

// (function() {
//     console.log("I run instantly!");
// })();

// function sum(...numbers) {
//     return numbers.reduce((total, num) => total + num, 0);
// }
// console.log(sum(1, 2, 3, 4)); // Output: 10

// function outer() {
//     return function inner() {
//         console.log("Returned from outer!");
//     };
// }

// const result = outer();
// result(); // Output: Returned from outer

// | Concept                   | What it does                   |
// | ------------------------- | ------------------------------ |
// | Basic Function            | Reusable block of code         |
// | Parameters/Return         | Takes input & gives output     |
// | Scope                     | Local/global variable rules    |
// | Callback                  | Pass a function to a function  |
// | Arrow Function            | Shorter function syntax        |
// | IIFE                      | Runs instantly                 |
// | Rest Parameters           | Accepts unknown number of args |
// | Function Returns Function | Useful for advanced patterns   |


// function greet(name) {
//     console.log("Hi user " + name);
// }

// function add(a, b) {
//     return a + b;
// }

// function isEven(num) {
//  return num % 2 === 0;
// }

// function maxOfThree(a, b, c) {
//     return Math.max(a, b, c);
// }
        
// function getLength(str) {
//     return str.length;
// }

// const para= document.getElementById("demo");
// console.log(para.textContent);

// const items = document.getElementsByClassName("info");
// console.log(items[0].textContent);

// window.console.log("Hello, World!");
// console.dir(window);
//  console.dir(document.body.childNodes[1]);

//Dom manipulation
// console.dir(document.body);
// document.getElementById("heading"); //h1
// console.dir(heading);

// let heading = document.getElementById("heading");
// console.dir(heading);

// let heading=document.getElementsByClassName("heading-class");
// console.dir(heading);
// console.log(heading);

// document.addEventListener("DOMContentLoaded", function() {  
      //What it does: Waits until the browser has parsed the HTML and built the DOM tree. This ensures any getElementById calls won't return null.
     //Why use it: Safer than running scripts before the HTML is ready; avoids timing bugs
    // - DOMContentLoaded fires when the browser has completely loaded the HTML
    //   and built the DOM tree in memory.
    // - It does NOT wait for images, stylesheets, or videos to load — only the structure.
    // - This ensures that getElementById calls will NOT return null,
    //   because the elements already exist in the DOM.
// const title = document.getElementById("title");
       //Why use it: Safer than running scripts before the HTML is ready; avoids timing bugs.
      // - This line grabs the element with ID "title" from the DOM.
     // - getElementById is very fast because IDs are unique in HTML.
    // - Returns a reference to the DOM element, so you can change or read it.
//title.textContent = "Hello, DOM--Lesson 1";
   //What it does: Replaces the plain text inside the <h1> element. Any HTML inside the string will be treated as text (no parsing).
   //Security note: textContent is safe from HTML injection.
    // - Replaces whatever text was inside the <h1> with our new string.
    // - If there was HTML inside (like <b>bold</b>), it will NOT be rendered as HTML,
    //   it will appear as plain text — because textContent escapes HTML.
    // ---------------------- Security Note ----------------------
    // - Safer than innerHTML because it prevents HTML injection attacks.
    // ------------------------------------------------------------

    // Step 4: Select the button with id="btn"
//const btn= document.getElementById("btn");
     //What it does: Grabs the button so we can attach an event handler to it
     // - We want to attach an event handler to this button so something happens on click.
     // - Again, IDs are unique, so this finds exactly one element.
//btn.addEventListener("click", function(e){
      //What it does: Adds a click listener to the button. The handler receives an Event object (named e here).  
        // - addEventListener("click", ...) tells the browser:
        //   "Whenever the user clicks this button, run this function."
        // - 'e' is the Event object automatically passed to the handler.
        //   It contains details like which element was clicked, mouse position, etc.
// title.textContent = "Button was clicked!";
           // ---------------------- Why? ----------------------
        // - Shows how we can manipulate multiple DOM elements in one event.
        // - Demonstrates that variables like 'title' still point to the same DOM elements.
//});
//});

// document.addEventListener("DOMContentLoaded", function() {
     // 1️⃣ Wait until DOM is ready before running any code
     //Purpose: Runs the code only after the HTML is fully loaded and the DOM tree is built.
    //If you try to select elements before they exist in the DOM, you'll get null.
    //Difference from load:
   // //DOMContentLoaded fires as soon as HTML is parsed (faster).
  //load waits for all resources (images, CSS, etc.) to load (slower).

// const heading = document.getElementById("heading");
     // 2️⃣ select the heading element by its ID
    // Purpose: Selects the <h1> element with the ID "heading".
    // document: the root object representing the whole HTML page.
    // getElementById(): finds exactly one element by ID (IDs should be unique).
   // Returns a DOM element object, not just text.
//  const button = document.getElementById("btn");
    // 3️⃣ Select the button element by its ID
// heading.textContent = "Welcome to DOM Lesson 1";
    // 4️⃣ Change the heading's text using textContent
    //textContent replaces all the text inside an element.
     // Why not innerHTML?
      // textContent → treats the string as plain text (safe).
      // innerHTML → parses it as HTML (can create elements, but dangerous if input is from a user).
  // button.addEventListener("click", function(e) {
       // 5️⃣ Add a click event listener to the button
        // Purpose: Runs the function whenever the button is clicked.
        // 'e' is the Event object that contains details about the click event.
          //         Purpose: Waits for a "click" on the button, then runs the function.
          // addEventListener is preferred over HTML’s onclick attribute because:
         // Keeps JavaScript separate from HTML.
        // Allows attaching multiple listeners to the same element.
        // "click" is the event type — you can also use "mouseover", "keydown", etc.
// heading.textContent = "Button was clicked!";
        // 6️⃣ Change the heading text when the button is clicked
        // Demonstrates how to manipulate DOM elements in response to user actions.
        //This shows dynamic page updates without refreshing.

//     });
// });

//document.addEventListener("DOMContentLoaded", function() {
  // Step 1: Wait for the DOM to be ready
  //const title = document.getElementById("title");
  // Step 2: Select the title element by its ID
  //const toggleButton = document.getElementById("toggleButton");
  // Step 3: Select the button by its ID
  //toggleButton.addEventListener("click", function() {
    // Step 4: Add a click event listener to the button
    //if (title.style.display === "none") {
      //title.style.display = "block"; // Show the title
    //} else {
     // title.style.display = "none"; // Hide the title
   // }
  
//});
//});

//document.addEventListener("DOMContentLoaded", function() {
  // Wait for the DOM to be fully loaded
//  const title = document.getElementById("title");
  // Select the title element by its ID
//  const toggleButton = document.getElementById("toggleButton");
  // Select the button by its ID

 // toggleButton.addEventListener("click", function() {
    // Add a click event listener to the button
    //if (title.style.display === "none") {
      // If the title is currently hidden
      //title.style.display = "block"; // Show the title

   // } else {
      // If the title is currently visible
     // title.style.display = "none"; // Hide the title
   // }
    // Toggle the display property of the title element

//  });
  // Add a click event listener to the button
//});
// This code waits for the DOM to be ready, selects elements, and toggles the visibility of the title element when the button is clicked.