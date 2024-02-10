require('dotenv').config()
const express=require('express')
const cors= require('cors')
const router=require('./Routes/router')
require('./DB/connection')

const pfServer=express()
// available file or folder from server
pfServer.use('/uploads',express.static('./uploads'))

pfServer.use(cors())
const PORT=3000
pfServer.use(express.json())
pfServer.use(router)
pfServer.listen(PORT,()=>{
    console.log(`Projetc Fair server started at port: ${PORT}`);
})
 
pfServer.get('/',(req,res)=>{
    res.send("project fair server started")
})
// pfServer.get('/',(req,res)=>{
//     res.send("Post Request")
// })

