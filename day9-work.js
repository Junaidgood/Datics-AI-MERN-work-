
   //IIFE

// let a = ()=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//          resolve(444)

//         },3000)
//     })
// }


// (async ()=>{
//   let b = await a();
//   console.log(b)
//   let c = await a();
//   console.log(b)
//   let d = await a()
//   console.log(b)
// })()


   
    //destructing

// let arr = [7,2,4,44,22,11,55]

// let [a,b,c,d,e] = arr

// console.log(a,b,c,d,e)

// let arr = [7,2,4,44,22,11,55]

// let {a,b} = {a:5,b:7}

// console.log(a,b)
  
     
    //spread oprator

// let arr = [7,2,4,44,22,11,55]

// let [a,b,c,d,e, ...rest] = arr

// console.log(a,b,c,d,e,rest)



// let arr = [7,2,4,44,22,11,55]
// let obj1 = {...arr}

// console.log(obj1)



// let arr = [7,2,4]

// let obj = {...arr}

// console.log(obj)

// function sum (a,b,c){
//   return(a+b+c)
// }

// console.log(sum(...arr))



// let obj = {
//    "name":"king",
//    "nationality":"usa",
//    "hobby":"coins"

// }

// console.log({...obj, name : "mango"})
// console.log({name : "mango",...obj}) // this will not change the name bcoz pehly kr dia name ko


     //hoisting

console.log(a)
greet()

function greet(){
  console.log("hellooo")
}

let a;



          //clousers

   function createGameScore() {
    let score = 0; 

  
    return function updateScore() {
        score = score + 1;
        console.log("Current Score:", score);
    }
}

let myGame = createGameScore(); 


myGame(); 
myGame(); 
myGame(); 




   