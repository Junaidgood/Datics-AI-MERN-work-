const express = require('express');
const mongoose = require('mongoose')
const userRoutes = require('./userRoutes')

const app = express();
app.use(express.json());

const mongo = mongoose.connect('mongodb://localhost:27017/mern-practice-datics')
.then(()=>console.log('mongo is connected'))
.catch((err)=>console.error("error , mongo not connected",err));


app.use('/api/users', userRoutes);

app.listen(5000 , ()=>{
    console.log('server is running successfully') 

})