const projects= require('../Models/projectModel')

// addproject

exports.addProject=async(req,res)=>{
    console.log("Inside add project");
    const userId=req.payload
    const {title,languages,overview,website,github}=req.body
    const projectImage=req.file.filename
    console.log(title,languages,overview,website,github,userId);
    try{
const existingProject=await projects.findOne({github})
if(existingProject){
res.status(406).json("Project repository is already exist..please upload another")
}else{
const newProject=new projects({
title,languages,overview,github,website,projectImage,userId
})
await newProject.save()
res.status(200).json(newProject)
}
    }
    catch(err){
res.status(401).json(err)
    }
  
}

// get home project
exports.getHomeProjects=async(req,res)=>{
    try{
        const homeProjects=await projects.find().limit(3)    
    res.status(200).json(homeProjects)
    }catch(err){
       res.status(401).json(err)
    }
}
// all projects
exports.getallProjects=async(req,res)=>{
    try{
        const allProjects=await projects.find()  
    res.status(200).json(allProjects)
    }catch(err){
       res.status(401).json(err)
    }
}

// get user project
exports.getUserProject=async(req,res)=>{
    const userId=req.payload
    try{
        const userProjects=await projects.find({userId})  
    res.status(200).json(userProjects)
    }catch(err){
       res.status(401).json(err)
    }
}