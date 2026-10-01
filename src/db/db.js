import mongoose from 'mongoose';


const connectDb =  async () =>{

    try{ 
        const connectionInstanc = await  mongoose.connect('mongodb+srv://vaghelameghrajsinh96_db_user:dnodYg9wlzUe5CfJ@coding0.9yteqkc.mongodb.net/Coding');
        console.log("MongoDb connected !! DB HOST : ",connectionInstanc.connection.host)

    }catch (error){
        console.log("MONGODB CONNECTION error :",error);
        process.exit(1)

    }

}

export default connectDb