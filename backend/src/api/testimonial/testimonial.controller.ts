import { NextFunction,Response,Request, RequestHandler } from "express";
import { testiMonial } from "../../types/testiMonials.type";
import createHttpError from "http-errors";
import testimonialModel from "./testimonial.model";


export const createtestimonial:RequestHandler<unknown,unknown,testiMonial> = async (req,res,next)=>{

    const {comments,name,cFounder,image} =req.body;
    try {

        if(!comments || !name || !cFounder || !image){
            return next(createHttpError(402,'all field must be required!!'));
        }

        const testi = await testimonialModel.create(req.body);

        res.status(201).json({
            success:true,
            data:testi
        })
         
    } catch (error) {
        
        return next(error);

    }
}

export const getTestimonial=async (req:Request,res:Response,next:NextFunction)=>{

    try {

        const testi = await testimonialModel.find({}).exec();

       res.status(200).json({
            success:true,
            data:testi
        })
        
    } catch (error) {
         return next(error)
    }

}