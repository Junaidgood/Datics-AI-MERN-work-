// let P1 = new Promise((resolve,reject)=>{
       
//     setTimeout(()=>{
      
//         console.log("hello bruh p1")
//         resolve(56)
//     },3000)
// })

// P1.then((value)=>{

//     console.log(value)

//     let p2 = new Promise((resolve,reject)=>{

//        setTimeout(()=>{
//         resolve("promise 2 resoled")
//        },2000) 
        
//     })
//     return(p2)
// }).then((value)=>{
//     console.log("we are done")
// })


// let P2 = new Promise((resolve,reject)=>{
       
//     setTimeout(()=>{
      
//         console.log("hello bruh p2")
//         resolve(56)
//     },3000)
// })


// let P3 = new Promise((resolve,reject)=>{
       
//     setTimeout(()=>{
      
//         console.log("hello bruh p2")
//         reject(new Error("lo error aagya"));
        
//     },3000)
// })


// let all_P = Promise.all([P1 ,P2, P3])

//   all_P.then((value)=>{
//     console.log(value)
//   })



// let P1 = new Promise((resolve,reject)=>{
       
//     setTimeout(()=>{
      
//         console.log("hello bruh p1")
       
//     },2000)
// })


// let P2 = new Promise((resolve,reject)=>{
       
//     setTimeout(()=>{
      
       
//         reject(new Error("lo error aagya 2"));
        
//     },10000)
// })


// let P3 = new Promise((resolve,reject)=>{
       
//     setTimeout(()=>{
      
//         console.log("hello bruh p3")
//         resolve(53)
        
        
//     },6000)
// })


// let P4 = new Promise((resolve,reject)=>{
       
//     setTimeout(()=>{
      
    
//         reject(new Error("lo error aagya 4444"));
        
//     },9000)
// })


// let all_P = Promise.allSettled([P1 ,P2, P3])

//   all_P.then((value)=>{
//     console.log(value)
//   })


// let all_P = Promise.any([P1 ,P2, P3,P4])

//   all_P.then((value)=>{
//     console.log(value)
//   })


// let all_P = Promise.all([P1 ,P2, P3,P4])

//   all_P.then((value)=>{
//     console.log(value)
//   })


// let all_P = Promise.race([P1 ,P2,P4, P3])

//   all_P.then((value)=>{
//     console.log(value)
//   })


//   let all_P = Promise.resolve([P1 ,P2,P4, P3])

//   all_P.then((value)=>{
//     console.log(value)
//   })





// async function junaid(){

//     let lahoreweather = new Promise((resolve,reject)=>{
//       setTimeout(()=>{
//         resolve("lahore weathe is 40")
//       },4000)
//     })

//     let karachiweather = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("karachi weather is 30")
//           },7000)
//     })


//     console.log("data is loading....");
//     let LW = await lahoreweather;
//     console.log("fetched lahore weather :" + LW)
    

//     console.log(" karachi data is loading....");
//     let KW = await karachiweather;
//     console.log("fetched lahore weather :" + KW)

// }

// let a = junaid()

// a.then((value)=>{
//   console.log(value)
// })





// setTimeout(()=>{
//     console.log("hello bruh")
//   },4000)


   
     //try/catch

//   try{
//     setTimeout(()=>{
//         console.log(junaid)
//     },5000)
     
//   }

//   catch(error){
//     console.log("haha error occurs")
//   }

//   console.log("jaodnoaasdqsd")



// try{
//     console.log("junaid")
//     throw new ReferenceError("error ha try ka")
// }

// catch(error){
//   console.log(error.name)
//   console.log(error.message)
//   console.log(error.stack)
// }

// finally{
//     console.log("hello bhai finally chal gya ha")
// }


// let P = fetch("https://goweather.herokuapp.com/weather/Ny")

// P.then((response)=>{
//     console.log(response.status)
//     console.log(response.ok)
//     return response.json()
// }).then((value2)=>{
//   console.log(value2)
// })


     
   //fetch api


// let newUser = {
//     username: "Huzaifa",
//     profession: "3D Full Stack Developer",
//     experience: "1 Year"
// };

// // 2. Fetch API se POST request marna
// fetch("https://tumhara-backend-api.com/register", {
    
//     method: "POST", 
    
//     headers: {
//         "Content-Type": "application/json" 
//     },
    
//     body: JSON.stringify(newUser) 
    
// })

// .then(response => response.json()) 
// .then(result => {
//     console.log("Success! Server ka jawab:", result);
// })
// .catch(error => {
//     console.log("Error aa gaya bhai:", error);
// });


// console.log(document.cookie)
// document.cookie = "name=junaid"
// document.cookie = "name2=junaiddzxcq"
// document.cookie = "name=junaid"
// let key = prompt("enter ur key")
// let value = prompt("enter ur value")

// document.cookie= `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
// console.log(document.cookie)



    //localstorage.
   
//  let key = prompt("enter ur key")
//  let value = prompt("enter ur value")
// localStorage.setItem(key,value)
// localStorage.key(0)
// console.log(`the value at ${key} is ${localStorage.getItem(key)}`)

