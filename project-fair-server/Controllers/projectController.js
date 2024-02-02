const projects= require('../Models/projectModel')

// addproject

exports.addProject=(req,res)=>{
    console.log("Inside add project");
    console.log(req.body);
    res.status(200).json("add project req received")
}