import {Request, Response} from "express";
import { EmployeeService } from "../service/EmployeeService";

import HTTPResponseHandler from "../handlers/HTTPResponseHandler";

export class EmployeeController {

    private employeeService: EmployeeService;
    
    constructor() {
        this.employeeService = new EmployeeService();
    }

    public getEmployees = (req: Request , res: Response ) => {
        this.employeeService.getEmployess()
        .then((employees:any[]) => {
            HTTPResponseHandler.sendSuccess(res , employees);
        })
        .catch((err) => {
            console.log(err);
            HTTPResponseHandler.sendInternalError(res , err , null);
        });
    }

   
}
