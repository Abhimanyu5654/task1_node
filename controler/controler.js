const express=require('express')
const router=express.Router()

const Users=require('../module/module')

router.get('/get',(req,res)=>{
    Users.find()
    .then((user)=>{
        res.json(user)
        console.log('SuccessFully done')
    })
    .catch((error)=>{
        console.log(error)
    })
})
router.post('/',(req,res)=>{
    const user=new Users({...req.body});
    user.save()
    .then((result)=>{
        res.status(200).send('Data saved successfully',result);
        
    })
    .catch((err)=>{
        res.status(405).send(err)
    })
})
module.exports=router;