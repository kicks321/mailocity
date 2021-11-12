import mysql from "mysql2";
import config from "@/config";

export default async (): Promise<mysql.Connection> => {
    const connection = await mysql.createConnection({
        host: config.database.host,
        user: config.database.user,
        password: config.database.password,
        database: config.database.name,
    });
    return connection;
};