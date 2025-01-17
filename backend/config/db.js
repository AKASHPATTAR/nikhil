import mongoose from "mongoose";

export const connectDB = async () =>{
    await mongoose.connect('MONGODB_API').then(()=>console.log("DB Connected"));
}





