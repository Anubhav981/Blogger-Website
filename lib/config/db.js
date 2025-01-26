import mongoose from "mongoose";

export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://anubhavkumar76331:Anubhav4321@cluster0.ypa0q.mongodb.net/blog-app');
    console.log("DB Connected");
}