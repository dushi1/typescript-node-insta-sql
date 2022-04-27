import app from "./src/config/express";
import "reflect-metadata";
import logger from "./src/config/logger";
import { DataSource } from "typeorm";
import { User } from "./src/entity/user.entity";

const PORT = process.env.NODE_ENV || 3000;

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "Tiger123@",
    database: "instatest",
    synchronize: true,
    logging: true,
    entities: ["./src/entity/*.entity.js"],

})
logger.info(`Server started on port ${PORT}`)

AppDataSource.initialize().then(async (resp) => {
    const user = new User();
    user.name = 'john@example.com';
    await AppDataSource.getRepository(User).save(user);
    app.listen(PORT, async () => {
        console.log(`Server is running on port ${PORT}`);
        console.log('YOOOOOO');
    })
}).catch(error => logger.error(error))



