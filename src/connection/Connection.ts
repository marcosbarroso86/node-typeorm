import "reflect-metadata";
import {Connection, createConnection} from "typeorm";
import { Employee } from "../model/Employee";

export class Repository {

    private static connection: Connection;

    public static getInstace = async () : Promise<Connection> => {
        if(!Repository.connection) {
            if(Repository.connection) {
                return Repository.connection;
            } else {
                
                let options:any = {};
                options.type =  process.env.type;
                options.host = process.env.host
                options.port = process.env.port;
                options.username = process.env.username;
                options.password = process.env.password;
                options.sid = process.env.sid;
                options.database = process.env.database;
                options.entities = [
                    Employee
                ],
                options.synchronize = false,
                options.logging = true

                const connection = await createConnection(options);
                Repository.connection = connection;
            }
        }
        return Repository.connection;
    }

    public static getConnection = async () => {
        const connection = await Repository.getInstace();
        return connection;
    }
}

