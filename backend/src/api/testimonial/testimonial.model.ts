import mongoose, { InferSchemaType, model } from "mongoose";

const testiSchema = new mongoose.Schema({
    image:{type:String,required:true},
    comments:{type:String,required:true},
    name:{type:String,required:true},
    cFounder:{type:String,required:true}
})

type testiModel = InferSchemaType<typeof testiSchema>;

export default model<testiModel>('Testimonial',testiSchema);