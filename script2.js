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

let marks=[85,97,44,37,76,60];

let sum=0;

for(let val of marks){
    sum += val;
}

let avg = sum / marks.length;
console.log('avg marks of the class= ${avg}');