
import dotenv from 'dotenv';

import app from './src/app.js'
import connectDb from "./src/db/db.js";


dotenv.config({
    path : './env'
});



connectDb()

.then(()=>{
    app.listen(process.env.PORT || 3000,()=>{
        console.log("Server is running on port 3000");
    })  
})
.catch((error)=>{
    console.log("MONGO db Connection failed !!!! ",error)
})



