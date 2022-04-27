import express, { Request, Response, NextFunction } from 'express';
import morgan from 'morgan';
import path from 'path';
import { AppDataSource } from '../../index';
const app = express();

require('dotenv').config();
app.use(express.json());
app.use(morgan('dev'));

// app.use('/', (req: Request, res: Response, next: NextFunction) => {
//     // res.sendFile(path.join(__dirname, '..', '/index.html'))
//     res.send('Hello World')
// })

app.use('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        // const a = await AppDataSource.getRepository(User).insert([{
        //     name: 'test'
        // }]).then(() => {
        //     res.send('Errrroorrr')
        // })

        // await AppDataSource.createQueryBuilder()
        //     .insert()
        //     .into(User)
        //     .values([{
        //         name: 'test'
        //     }])
        //     .execute()
        //     .catch(() => {
        //         res.send('Errrroorrr')
        //     }
        //     )
    } catch (err) {
        console.log(err, 'err');

    }

})

export default app;