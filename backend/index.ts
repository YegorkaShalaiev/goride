import "app-module-path/cwd";
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import config from 'config';

dotenv.config({ path: `.env.${process.env.NODE_ENV || 'development'}` });

const app = express();
const { host, port } = config;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express with TypeScript!');
});

app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
