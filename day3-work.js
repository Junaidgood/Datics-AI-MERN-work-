  //Arrays

const PromptSync = require("prompt-sync")

// let num = [34,23,22,44,11,55];
// let b = num.toString();

// console.log(b,typeof b)
// let c = num.join("_")
// console.log(c,typeof c)

// let a = num.pop()
// console.log(num,a)

// let d = num.push(99)
// console.log(num,d)

// let e = num.shift()
// console.log(num,e)

// let f = num.unshift(77)
// console.log(num,f)

// delete num[2]
// console.log(num.length)
// console.log(num)
// console.log(num.length)


// let num = [34,23,22,44,11,55]

// let num1 = [343,23,212,441,11,155]

// let num2 = [34,23,22,44,11,55,31,232]


// let newArr = num.concat(num1,num2)

// console.log(newArr)

let good =(a,b) =>{
  return(a-b)
}

let num = [34,23,22,44,11,55,77]

num.sort(good);
console.log(num)

// num.reverse();
// console.log(num)

// num.splice(2,4,10,222,333,44)
//  console.log(num)

    // array with loops

// num.forEach((well)=>{
//     console.log(well*well)
// })


// let name = "junaid";

// let arr = Array.from(name);

// console.log(arr);



// for(let i in num){
//     console.log(num[i])
// }



// for(let item of num){
//     console.log(item)
// }

  
    //higher order array methods

let arr = [45,33,22,34,21,5,3]

// let a=arr.map((value)=>{
// console.log(value)
// return value + 1;
// })

// console.log(a);


   //map method

// let a=arr.map((val,indx,arr)=>{
//     console.log(val,indx,arr)
//     return val + 1;
//     })
    
//     console.log(a);

    
    //filter method 

// let a=arr.filter((val)=>{
//     console.log(val)
//     return val < 40;
//     })
    
//     console.log(a);


     //reduce method 

// let a=arr.reduce((h1,h2)=>{
    
//     return h1+h2;
//     })
    
//     console.log(a);

  
   //practice set on array
//    const prompt = require('prompt-sync')();

//    let a;
// do{
//      a=prompt("enter a number :")
//     a=Number.parseInt(a)

//     arr.push(a)
  

// }while(a!=0)
//     console.log(arr)


    //guess the number quiz/test
    
const prompt = require('prompt-sync')();

let chances = 0 ; 
let guess;


let randNum = Math.floor(Math.random() * 100) + 1;

do{
    guess = prompt("enter a number :");
    guess = Number.parseInt(guess);
    
    chances++;

if(guess>randNum){
    console.log("its high")
}

else if(guess < randNum){
    console.log("its low")
}

else{
    console.log("very good you did it in ",chances,"tries")
    console.log("the number is :" , randNum)
}

}while(guess!=randNum);

