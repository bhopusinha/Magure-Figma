import express, { NextFunction,Request,Response } from "express";
import morgan from 'morgan';
import createHttpError,{isHttpError} from "http-errors";
import connectDb from "./config/database.config";
import { nodeRouter, tableRouter,testiRouter } from "./api/index";
import cors from 'cors'

const app= express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());


connectDb();

// app.get('/',(req,res,next)=>{
     
//     res.json("hello bro")

// })


app.use('/api/table',tableRouter)
app.use('/api/testi',testiRouter);
app.use('/api/send',nodeRouter);

app.use((req,res,next)=>{
   return next(createHttpError(404,"Endpoint not Found!!"));
})


app.use((err:unknown,req:Request,res:Response,next:NextFunction)=>{
     
    let errorMessage = "Internal Server Error";
    let statuscode= 500;

    if(isHttpError(err)){
        statuscode=err.status;
        errorMessage=err.message;
    }

     res.status(statuscode).json({success:false,error:errorMessage})

})


export default app;