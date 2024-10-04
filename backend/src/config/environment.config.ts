import {config} from 'dotenv';

config();


export default {
    app:{
        port : Number(process.env.PORT) || 4000,
        url  : " "
    },
    db:process.env.MONGO_URL,
    environment:""
}