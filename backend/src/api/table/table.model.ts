import mongoose,{InferSchemaType, model} from "mongoose";

const tableSchema = new mongoose.Schema({
    userName:{type:String,required:true,unique:true},
    tableNo :{type:Number,required:true},
    chairQuantity:{type:Number,required:true},
    date:{type:String,required:true},
    contact:{type:String,required:true,minLength:[10,'number should be 10 digit!'],maxLength:[10,'number cannot exceed 10 digit !']}
},{
    timestamps:true
}
)


type tableType = InferSchemaType<typeof tableSchema>;


export default model<tableType>("Table",tableSchema);