
  // prototype


// let junaid = {
//     "king": "hello",
//     "batsman": "fakhar",
//     "bowler": 57
// }

// let mobile = {
//     "region": "pak",
//     "device": "charg",
//     "bowler": 51
// }

// // 1. Pehle junaid ka prototype set kia
// junaid.__proto__ = {
//     "sky": "blue"
// }


// mobile.__proto__ = junaid

// console.log(mobile.sky); 



    // classes and object

// class junaid{
//     submit(){
//         alert(this.name +"form submitted")
//     }
//     cancel(){
//         alert(this.name +"form cancelled")
//     }
//     fill(givenname){
//         this.name = givenname
//     }
// }

// let umarform = new junaid()
// umarform.fill("umar")

// let Aliform =new junaid();
// Aliform.fill("Ali")

// Aliform.cancel();
// umarform.submit();


   //Constructors    


// class junaid{
//     constructor(givenname,trainNo){
//         console.log("constuctor called "+ givenname + trainNo)
//         this.name = givenname;
//         this.train=trainNo;
//     }
//     submit(){
//         alert(this.name +"form submitted")
//     }
//     cancel(){
//         alert(this.name +"form cancelled")
//     }
   
// }

// let umarform = new junaid("kingoo",1234)


// let Aliform =new junaid("mobile",42321);


// Aliform.cancel();
// umarform.submit();


    //inheritance

// class Animal{
//     constructor(color, name){
//         this.color = color;
//         this.name = name;
        
//     }

//     run(){
//         console.log(this.color + "is color animal")
//     }
//     shout(){
//         console.log(this.name + "is running")
        
//     }

// }

// class Monkey extends Animal {
//  eatBanana(){
//     console.log(this.name + "is eating banana")
//  }
// }

// let a = new Animal("bruno","monk")
// let m = new Monkey("mobile","9ft")


// a.shout() 
// m.shout()


 
  // method overriding

  class Employee{
   login(){
    console.log("hello user login")
   }


    logout(){
        console.log("hello user logout dfdsfaf")
    }
     
}

class programmer extends Employee {
   
   instructions (){
    console.log("you are a programmer")
 }

   logout(){
    super.logout()
        
}

}
let a = new Employee()
let m = new programmer()


m.logout() 
m.instructions()