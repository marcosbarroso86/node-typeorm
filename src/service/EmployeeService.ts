import { Employee } from "../model/Employee";
import HttpRequestError from "../errors/HttpRequestError";

export class EmployeeService {

    constructor() {}

    public getEmployess = async () => {
        /* const employeeRepository = await this.getRepository();
        const res = await employeeRepository.find(); */
        return [
            {

                nombre : 'matias',
                apellido : 'ciarla'
    
            },
            {

                nombre : 'joni',
                apellido : 'madrigale'
    
            }
        ] 
    }

    
}
