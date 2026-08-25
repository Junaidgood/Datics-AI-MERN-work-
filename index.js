// const express = require('express')
// const app = express();
// const Path = require('path')

// app.use(express.json());
// app.use(express.urlencoded({extended:true}))
// app.use(express.static(Path.join(__dirname,"public")))
// app.set("view engine","ejs")

// app.get("/",function(req,res){
//     res.render("index")
// })
// app.get("/profile/:username",function(req,res){
//     res.send(req.params.username);
// })
// app.listen(3000,function(){
//     console.log("very good running")
// })


// const os = require('os')
// console.log(os.cpus())


  //basic api creation

const { name } = require('ejs')
const http = require('http')

const userdata =[
    {
        name : "junaid",
        rollno : 30,
        roll : "backend"
    },
    {
        name : "umer",
        rollno : 10,
        roll : "frontend"
    },
    {
        name : "Ali",
        rollno : 12,
        roll : "backend"
    }

] 

http.createServer((req,res)=>{
    res.setHeader("Content-Type",'application/json');
    res.write(JSON.stringify(userdata))
    res.end()
}).listen(2000)