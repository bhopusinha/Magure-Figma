import { Router } from "express";
import { sendMail } from "./email.controller";

const nodeRouter= Router();


nodeRouter.route('/mail').post(sendMail);


export default nodeRouter;