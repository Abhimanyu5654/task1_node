const express=require('express')
const router=express.Router()

const Users=require('../module/module')

router.get('/get',(req,res)=>{
    Users.find()
    .then((user)=>{
        res.json(user)
        console.log('SuccessFully done')
        console.log(user)
    })
    .catch((error)=>{
        console.log(error)
    })
})
router.post('/post',(req,res)=>{
    const user=new Users(req.body);
    console.log('hello')
    user.save()
    .then((result)=>{
        console.log('hiii')
        res.status(200).send('Data saved successfully',result);
        
    })
    .catch((err)=>{
        res.status(405).send(err)
    })
})
module.exports=router;