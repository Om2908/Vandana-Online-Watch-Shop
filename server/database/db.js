import mongoose from "mongoose";

export const Connection = async (username,password)=>{
    mongoose
      .connect(
        `mongodb+srv://omitaliya2525:Om2525@cluster0.kqdga1o.mongodb.net/`,
       
        {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          
        }
      )
      .then(() => console.log("Database Connected"))
      .catch((err) => console.log(err));
}

export default Connection;