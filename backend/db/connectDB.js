import mongoose from "mongoose";

const connectDB = async () => {
   
    try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParsper: true,
        useUnifiedTopology: true,
    })
   
   console.log(`MongoDB Connected: ${conn.connection.host}`);
  }catch (error){
   console.error(`Èrror: $(error.message)`);
   process.exit(1); 
  }
}

export default connectDB;