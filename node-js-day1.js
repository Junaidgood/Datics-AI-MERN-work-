const fs = require('fs')


// fs.appendFile("day1-prac-node.txt","very good junaid , i am the best",function(err){
//     if (err) console.error(err)
//     else console.log("done")
// })


// fs.rename("day1-prac-node.txt","rename-done,txt",function(err){
//     if (err) console.error(err)
//     else console.log("done name changed")
// })


// fs.copyFile("rename-done.txt","./copy/copy-file-created.txt",function(err){
//     if (err) console.error(err.message)
//     else console.log("done copy file")
// })

// fs.unlink("./copy/copy-file-created.txt",function(err){
//     if (err) console.error(err.message)
//     else console.log("done copy file")
// })

// fs.rmdir("./cpu",function(err){
//     if (err) console.error(err.message)
//     else console.log("done copy file")
// })


// fs.readFile("./rename-done.txt","utf8",(err,data)=>{
//     if (err) console.error(err.message)
//     else console.log(data)
// })




   //HTTP , node

// const HTTP = require('http')

// const server = HTTP.createServer(function(req,res){
//    res.end("hello brother")
// })

// server.listen(3000)

// console.log(server)


      // express


// const express = require('express')
// const app = express()

// app.get('/', function(req,res){
//     res.send("hello vroo")
// })

// app.listen(3000)




// const express = require('express');
// const app = express();


// app.use(function(req,res,next){
//     console.log("middleware chala ");
//     next
// })


// app.get("/me",(req,res)=>{
//     res.send("very good , you are best")
// })

// app.get("/king",(req,res)=>{
//     res.send("jioooooo")
// })


// app.listen(3000)



const express = require('express');
const app = express();

app.get("/king" ,function(req,res,next ){
   return next(new Error("error aa gaya BE m"))

})

app.use((err,req,res,next)=>{
    console.error(err.stack)
    res.status(500).send("FE pr error aa gaya")
})

app.listen(3000)