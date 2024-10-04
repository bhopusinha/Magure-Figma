import { Router } from "express";
import { createTable } from "./table.controller";

const tableRouter= Router();


tableRouter.route('/add').post(createTable);


export default tableRouter;