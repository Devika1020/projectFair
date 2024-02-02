const mongoose=require('mongoose')
const connectionString=process.env.CONNECTION_STRING

mongoose.connect(connectionString).then(()=>{
    console.log("MongoDb Atlas connected successfully with pfserver");
}).catch(()=>{
    console.log(reason);
    console.log("MongoDb connection failed");
})