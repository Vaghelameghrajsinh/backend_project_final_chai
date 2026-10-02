import express from 'express'
import cors  from 'cors';
import cookieParser from 'cookie-parser';

const app = express();


app.use(cors({
    origin : process.env.CORS_ORIGIN,  // * lagao 
    credentials:true,
}));

app.use(express.json({limit : '16kb'}));
// jab url se data aata hai : 
app.use(express.urlencoded({extended:true,limit:'16kb'}));
app.use(express.static('public'));
// cookie par crud operation :
app.use(cookieParser());







export default app