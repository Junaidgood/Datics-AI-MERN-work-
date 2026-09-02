
const User = require('./userSchema')

const express = require('express')
const app = express();

const router = express.Router()

router.get('/all', async (req,res)=>{
    const users = await User.find()
    res.json(users)
})

router.post('/add',async(req,res)=>{

    try{
    const newUser = new User(req.body)

    await newUser.save();

    res.status(201).json({message :"user is created new ",data: newUser })
}
    
    catch(err){
        res.status(400).json({message:"error aa gaya user create krty huye",error : error.message})
    }


})

router.delete('/del/:id', async (req,res)=>{
    
    try{
    const userId = req.params.id

    const deleteUser = await User.findByIdAndDelete(userId)

    if(!deleteUser){
        return res.status(404).json({success:false, message: "user not found" })
    }
    
     res.status(200).json({success : true , message:"user delete ho gaya",data : deleteUser})
}

    catch(err){
    res.status(500).json({message : "server error",error:err.message})
}
})


router.put('/update/:id',async(req,res)=>{
    try{
        const userId = req.params.id
        const updateUser = await User.findByIdAndUpdate(userId,req.body,{new:true});
    
    if(!updateUser){
        return res.status(404).json({success : false,message:"cant update this,not found"})
    }
    res.status(200).json({success:true,message:"user is updated",data:updateUser})
}
  catch(err){
       res.status(500).json({success:false , message:"server error on update",error:err.message})
  }
})


module.exports = router;