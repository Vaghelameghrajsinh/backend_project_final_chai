
import dotenv from 'dotenv';
import connectDb from "./src/db/db.js";

dotenv.config({
    path : './env'
});




connectDb();



