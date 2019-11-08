import { EmployeeController } from "../controller/EmployeeController";

export class Router {

    private routes: any;
    private employeeController:EmployeeController;

    constructor(){
        this.employeeController = new EmployeeController();
    }

    public init(express: any) {
        this.routes = express.Router();

        this.routes.get('/', function(req: any, res: any) {
            res.send("api works!!"); 
         });
        
        this.routes.route('/employees')
        .get(this.employeeController.getEmployees);
    }

    public getRoutes(){
        return this.routes;
    }
    

}

