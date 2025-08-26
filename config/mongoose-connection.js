const mongoose=require("mongoose")

const connectDB= async()=>{

try{
   await mongoose.connect(process.env.MONGO_URL)
    console.log("coonnected to DB")
}

catch(err){
console.error("couldn't connect : ",err)
}

}

module.exports= connectDB;