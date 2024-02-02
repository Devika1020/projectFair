const users=require('../Models/userModel')
const jwt=require('jsonwebtoken')



exports.register =async (req, res) => {
    console.log("Inside REGISTER API");
    const { username, email, password } = req.body
    console.log(username, email, password);
try{
const existingUser=await users.findOne({email})
console.log(existingUser);
if(existingUser){
res.status(406).json("Email already exists...please login")
}else{
const newUser=new users({
    username,email,password,profile:"",github:"",linkedin:""
})
await newUser.save()
res.status(200).json(newUser)
}
}
catch(err){
res.status(401).json(err)
}
}


//login
exports.login =async (req, res) => {
    console.log("Inside Login API");
    const { email, password } = req.body
    console.log(email, password);
try{
const existingUser=await users.findOne({email,password})
console.log(existingUser);
if(existingUser){
    const token=jwt.sign({userId:existingUser._id},process.env.JWT_SECRETKEY)
    res.status(200).json({existingUser,token})

}else{
res.status(404).json("invalid Email / Password")
}
}catch(err){
res.status(401).json(err)
}
}