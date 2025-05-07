import mongoose, { Mongoose, model } from "mongoose";



  const apiSchema = new mongoose.Schema({
 
  api:{type:String}
  });



export default mongoose.model.apis || mongoose.model('api',apiSchema)