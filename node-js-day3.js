// const http = require('http')

// http.createServer((req,res)=>{
//     console.log(req.headers.host)
//     console.log(req.method)
//     if(req.url == '/'){
//         res.write("/ route ha")
//     }
//     else if(req.url == '/about'){
//         res.write("helloooo about route")
//     }
    
//     res.end()
// }).listen(3333)




   //get input from terminal

// const http = require('http')


// const arg = process.argv;
// const port = arg[2]

// http.createServer((req,res)=>{
    
    
   
//     if(req.url == '/'){
//         res.write("/ route ha")
//     }
//     else if(req.url == '/about'){
//         res.write("helloooo about route")
//     }
    
//     res.end()
// }).listen(port)




   //send html file in response

// const http = require('http')
// const fs = require("fs")

// http.createServer((req,res)=>{
    
//     fs.readFile('./html/tryhtml.html','utf-8',(err,data)=>{
//         if(err){
//             res.writeHead(500,{'Content-type':'text/plain'})
//             res.write('internal serverr error')
//             res.end()
            
//             return

//         }
//         res.writeHead(200,{'Content-type':'text/html'})
//         res.write(data)
//         res.end()
//     })
   
   
// }).listen(4444)



// const http = require('http')
// const fs = require("fs")

// http.createServer((req,res)=>{
    
//     fs.readFile('./html/tryhtml.html','utf-8',(err,data)=>{
//         if(err){
//             res.writeHead(500,{'Content-type':'text/plain'})
//             res.write('internal serverr error')
//             res.end()
            
//             return

//         }
//         res.writeHead(200,{'Content-type':'text/html'})
//         if(req.url == '/'){
//             res.write(data)
//         }
//         else if (req.url == '/submit'){
//             res.write('<h1>form submitted</h1>')
//         }
        
//         res.end()
//     })
   
   
// }).listen(4444)