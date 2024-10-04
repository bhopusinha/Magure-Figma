import {config} from 'dotenv';

config();


export default {
    app:{
        port : Number(process.env.PORT) || 4000,
        url  : " "
    },
    db:process.env.MONGO_URL,
    environment:"",
    SMTP:{
        service: process.env.SMTP_SERVICE,
        mail:process.env.SMTP_MAIL,
        password:process.env.SMTP_PASSWORD,
        host:process.env.SMTP_HOST,
        port:process.env.SMTP_PORT,
    }
}