
// let myPromise = new Promise(function(resolve, reject) {
//     console.log("hello"); // Node.js mein alert kaam nahi karta isliye console.log likha
//     resolve(56);
// });

// console.log(myPromise);



    //promise(try,catch practise)

let myPromise = new Promise((resolve,reject)=>{

    console.log("ruko jara sabar kro, its pending ")

    setTimeout(()=>{
       console.log("kya haal ha bhai")
       resolve(true) 
    },3000)

})

let P2 = new Promise((resolve,reject)=>{

    console.log("ruko jara sabar kro, its pending ")

    setTimeout(()=>{
       console.log("hellooooo")
       reject(new Error("bhai error aaa gya")) 
    },3000)
})

myPromise.then((value)=>{
  console.log(value)
})

P2.catch((error)=>{
 console.log("bro error")
})

console.log(myPromise)
console.log(P2)