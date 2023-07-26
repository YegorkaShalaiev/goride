import express, { Express, Request, Response } from 'express';
import config from './config/index.js';

const { host, port } = config;

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express with Typescript!');
});

app.listen(port, host, () => {
    console.log(`Server is running!`);
});
