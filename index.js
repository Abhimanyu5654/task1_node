const express=require('express')
require('dotenv').config();
// const mongoose=require('mongoose')
const bodyparser=require('body-parser')
const connection=require('./db')
const cors=require('cors')
const userRouter=require('./controler/controler')

const app=express()
const port=process.env.PORT||8888
connection()
app.use(cors())
app.use(express.json())
app.use(bodyparser.json())
app.use(express.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//     res.locals.path = req.path;
//     next();
// });

app.use('/',userRouter)

app.listen(port,()=>{
    console.log(`Server runing on ${port}`)
})