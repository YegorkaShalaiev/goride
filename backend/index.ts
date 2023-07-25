import express, { Express, Request, Response } from 'express';

const HOST: string = 'localhost';
const PORT: number = 3000;

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, Express with Typescript!');
});

app.listen(PORT, HOST, () => {
    console.log(`Server is running!`);
});
