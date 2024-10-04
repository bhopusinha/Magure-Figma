import { RequestHandler } from "express";
import tableModel from "./table.model";
import createHttpError from "http-errors";
import { tableType } from "../../types/table.type";


export const createTable:RequestHandler<unknown,unknown,tableType,unknown> =async (req,res,next)=>{
    
    const {userName,tableNo,chairQuantity,date,contact} = req.body;

    try {
        
        if(!userName || !tableNo || !chairQuantity || !date || !contact){
            return next(createHttpError(402,'please fill all the required field!'));
        }
        
        if(contact.toString().length < 10 || contact.toString().length>10){
            return next(createHttpError(402,"number should be 10 digit!"));
        }

        let existTable = await tableModel.findOne({userName});

        if(existTable){
            return next(createHttpError(401,'userName already present please choose other!!'));
        }

        existTable = await tableModel.findOne({tableNo,date});

        if(existTable){
            return next(createHttpError(401,`the table number ${tableNo} already preserved on date ${date} , please select other table or other date!!`));
        }


        const newTable = await tableModel.create(req.body);

        res.status(200).json({
            success:true,
            data:newTable
        })
          
    } catch (error) {
         return next(error)
    }

}